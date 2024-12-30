// CSS
import "styles/global.css";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";

// Libs
import { MantineProvider } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";

export default function MyApp({ Component, pageProps, router }) {
    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={router.route}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <MantineProvider>
                    <main>
                        <Component {...pageProps} />
                    </main>
                </MantineProvider>
            </motion.div>
        </AnimatePresence>
    );
}
