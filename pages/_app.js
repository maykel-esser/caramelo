import { useState, useEffect } from "react";
import "styles/global.css";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import { MantineProvider } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";

export default function MyApp({ Component, pageProps, router }) {
    const [history, setHistory] = useState([]);
    const [isBack, setIsBack] = useState(false);

    // This useEffect hook will run every time the route changes
    // It will update the history state with the current route
    // With this we can set the transitions correctly.
    useEffect(() => {
        const handleRouteChangeStart = (url) => {
            setIsBack(history[history.length - 1] === url);
            setHistory((prevHistory) => {
                if (prevHistory[prevHistory.length - 1] === url) {
                    return prevHistory.slice(0, -1); // Remove our last route (backward)
                } else {
                    return [...prevHistory, router.asPath]; // Adds the new route (forward)
                }
            });
        };

        router.events.on("routeChangeStart", handleRouteChangeStart);

        return () => {
            router.events.off("routeChangeStart", handleRouteChangeStart);
        };
    }, [router.asPath, router.events, history]);

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={router.route}
                initial={{ x: isBack ? "-100%" : "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: isBack ? "100%" : "-100%", opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <MantineProvider>
                    <main className="bg-slate-50 min-h-screen">
                        <Component {...pageProps} />
                    </main>
                </MantineProvider>
            </motion.div>
        </AnimatePresence>
    );
}
