/* global Promise */
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import { QRCodeScanner } from "components/generic/QRCodeScanner";

export default function Page() {
    const router = useRouter();
    const [scanning, setScanning] = useState(true);
    const scannerRef = useRef(null);

    const handleScan = async (result) => {
        if (!scanning) return;
        setScanning(false);

        try {
            if (scannerRef.current) {
                try {
                    await scannerRef.current.stop();
                    scannerRef.current = null;
                } catch (error) {
                    console.error("Erro ao parar scanner:", error);
                }
            }

            const response = await fetch("/api/v1/credits/retrieve", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ qrCode: result }),
            });

            if (response.status !== 200) {
                throw new Error("Erro ao processar QR Code");
            }

            // Wait for 100 milliseconds
            await new Promise((resolve) => setTimeout(resolve, 100));
            await router.replace("/poc/consumer/retrieve/step2");
        } catch (error) {
            console.error("Erro:", error);
            setScanning(true);
        }
    };

    const handleError = (error) => {
        if (
            !error.includes("No barcode or QR code detected") &&
            !error.includes(
                "No MultiFormat Readers were able to detect the code",
            )
        ) {
            console.error("Erro no scanner:", error);
        }
    };

    return (
        <>
            <NavigationMenu source="consumer" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Resgatar crédito"
                    backToPreviousPage={true}
                />
                <section>
                    <p className="text-center mb-8">
                        Aproxime sua câmera do QR Code Caramelo do
                        estabelecimento. Após isso, o estabelecimento irá
                        confirmar seu crédito.
                    </p>
                    <div className="flex justify-center">
                        {scanning && (
                            <QRCodeScanner
                                ref={scannerRef}
                                onScan={handleScan}
                                onError={handleError}
                            />
                        )}
                    </div>
                </section>
            </main>
        </>
    );
}
