import { useEffect, useState, useRef } from "react";
import "styles/global.css";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import {
    MantineProvider,
    createTheme,
    defaultVariantColorsResolver,
    parseThemeColor,
} from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";

export default function MyApp({ Component, pageProps, router }) {
    const previousPath = useRef(null);
    const [isBack, setIsBack] = useState(false);

    // This useEffect hook will run every time the route changes
    // It will update the history state with the current route
    // With this we can set the transitions correctly.
    useEffect(() => {
        const handleRouteChangeStart = (url) => {
            const previous = previousPath.current;

            // Update the reference of the previous route
            previousPath.current = url;

            if (!previous) {
                setIsBack(false);
                return;
            }

            const currentSegments = url.split("/").filter(Boolean);
            const previousSegments = previous.split("/").filter(Boolean);

            // If we are navigating up in the hierarchy
            if (
                currentSegments.length < previousSegments.length &&
                currentSegments.every(
                    (segment, index) => segment === previousSegments[index],
                )
            ) {
                setIsBack(true); // Going up in the hierarchy = slide back
            } else {
                setIsBack(false); // Otherwise, slide forward
            }
        };

        // Listen to route changes
        router.events.on("routeChangeStart", handleRouteChangeStart);

        return () => {
            router.events.off("routeChangeStart", handleRouteChangeStart);
        };
    }, [router]);

    const variantColorResolver = (input) => {
        const defaultResolvedColors = defaultVariantColorsResolver(input);
        const parsedColor = parseThemeColor({
            color: input.color || input.theme.primaryColor,
            theme: input.theme,
        });

        if (parsedColor.isThemeColor && parsedColor.color === "caramelo") {
            if (input.variant === "filled") {
                return {
                    ...defaultResolvedColors,
                    background: input.theme.colors.caramelo[2],
                    color: input.theme.colors.caramelo[6],
                    hover: input.theme.colors.caramelo[1],
                };
            }

            if (input.variant === "outline") {
                return {
                    ...defaultResolvedColors,
                    background: "transparent",
                    color: input.theme.colors.caramelo[7],
                    border: `2px solid ${input.theme.colors.caramelo[7]}`,
                    hover: input.theme.colors.caramelo[1],
                    hoverColor: input.theme.colors.caramelo[6],
                };
            }
        }

        return defaultResolvedColors;
    };

    const theme = createTheme({
        colors: {
            caramelo: [
                "#FFF5E6", // lightest shade
                "#FFE6B3", // creme
                "#FFD664", // amarelo
                "#E28C0E", // queimado
                "#FF5E39", // vermelho
                "#6C67CE", // roxo
                "#151613", // preto
                "#ffbe2c", // amarelo (um pouco mais forte)
                "#000000",
                "#000000",
            ],
        },
        primaryColor: "caramelo",
        variantColorResolver,
        components: {
            Button: {
                defaultProps: {
                    variant: "filled",
                    color: "caramelo",
                    size: "lg",
                    radius: "md",
                    fullWidth: true,
                },
            },
            Badge: {
                defaultProps: {
                    color: "caramelo",
                    size: "lg",
                    radius: "sm",
                },
            },
            Slider: {
                defaultProps: {
                    color: "caramelo.2",
                    size: "lg",
                },
            },
            Checkbox: {
                defaultProps: {
                    color: "caramelo.2",
                    size: "md",
                },
            },
            TextInput: {
                defaultProps: {
                    size: "md",
                    radius: "md",
                    variant: "filled",
                },
            },
        },
    });

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={router.route}
                initial={{ x: isBack ? "-100%" : "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: isBack ? "100%" : "-100%", opacity: 0 }}
                transition={{ duration: 0.3, ease: "linear" }}
            >
                <MantineProvider theme={theme}>
                    <main className="bg-slate-50 min-h-screen">
                        <Component {...pageProps} />
                    </main>
                </MantineProvider>
            </motion.div>
        </AnimatePresence>
    );
}
