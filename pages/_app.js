// CSS
import "styles/global.css";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";

// Libs
import { MantineProvider } from "@mantine/core";

export default function MyApp({ Component, pageProps }) {
    return (
        <MantineProvider>
            <main>
                <Component {...pageProps} />
            </main>
        </MantineProvider>
    );
}
