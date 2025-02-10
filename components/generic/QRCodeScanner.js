import {
    useEffect,
    useRef,
    useState,
    forwardRef,
    useImperativeHandle,
    useCallback,
} from "react";
import { Html5Qrcode } from "html5-qrcode";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

// Move the ignored errors constant outside the component to avoid re-creation on every render.
const IGNORED_ERRORS = [
    "No barcode or QR code detected.",
    "NotFoundException: No MultiFormat Readers were able to detect the code.",
];

export const QRCodeScanner = forwardRef(({ onScan, onError }, ref) => {
    const scannerRef = useRef(null);
    const [hasCamera, setHasCamera] = useState(true);

    // Callback to handle errors, ignoring those defined in IGNORED_ERRORS.
    const handleError = useCallback(
        (errorMessage) => {
            // Ignore common errors related to QR code detection
            if (IGNORED_ERRORS.some((error) => errorMessage.includes(error))) {
                return;
            }
            // Report other errors using the onError callback if provided
            onError?.(errorMessage);
        },
        [onError], // IGNORED_ERRORS is a constant and doesn't need to be a dependency.
    );

    // Expose a stop method via the forwarded ref to allow the parent to stop the scanner.
    useImperativeHandle(ref, () => ({
        stop: async () => {
            try {
                if (scannerRef.current && scannerRef.current.isScanning) {
                    await scannerRef.current.stop();

                    // Remove all children from the scanner element
                    const element = document.getElementById("qr-reader");
                    if (element) {
                        while (element.firstChild) {
                            element.removeChild(element.firstChild);
                        }
                    }

                    scannerRef.current = null;
                }
            } catch (error) {
                console.error("Error stopping scanner:", error);
            }
        },
    }));

    // Effect hook to check for a camera and start the QR code scanner.
    useEffect(() => {
        const checkCamera = async () => {
            try {
                // List all available media devices
                const devices = await navigator.mediaDevices.enumerateDevices();
                const hasVideoDevice = devices.some(
                    (device) => device.kind === "videoinput",
                );
                setHasCamera(hasVideoDevice);

                if (!hasVideoDevice) {
                    onError?.("Nenhuma câmera encontrada");
                    return;
                }

                // Initialize the QR code scanner and assign it to the ref
                const scanner = new Html5Qrcode("qr-reader");
                scannerRef.current = scanner;

                await scanner
                    .start(
                        { facingMode: "environment" },
                        {
                            fps: 10,
                            qrbox: { width: 250, height: 250 },
                        },
                        (decodedText) => {
                            onScan(decodedText);
                        },
                        handleError,
                    )
                    .catch((err) => {
                        setHasCamera(false);
                        onError?.(err.message);
                    });
            } catch (error) {
                setHasCamera(false);
                onError?.(error.message);
            }
        };

        checkCamera();

        // Cleanup function: stop the scanner and clear the scanner element.
        return () => {
            if (scannerRef.current) {
                scannerRef.current.stop().catch(() => {
                    // Ignore errors during cleanup
                });

                const element = document.getElementById("qr-reader");
                if (element) {
                    while (element.firstChild) {
                        element.removeChild(element.firstChild);
                    }
                }

                scannerRef.current = null;
            }
        };
    }, [onScan, onError, handleError]); // Added onError as a dependency

    // Render a message if no camera is available
    if (!hasCamera) {
        return (
            <div className="w-full max-w-sm mx-auto p-6 bg-red-50 rounded-lg text-center">
                <ExclamationTriangleIcon className="w-12 h-12 mx-auto mb-4 text-red-500" />
                <h3 className="text-lg font-bold text-red-700 mb-2">
                    Câmera não disponível
                </h3>
                <p className="text-red-600">
                    Não foi possível acessar a câmera do seu dispositivo. Por
                    favor, verifique se:
                </p>
                <ul className="text-red-600 text-sm mt-2 list-disc list-inside">
                    <li>Você permitiu o acesso à câmera</li>
                    <li>Seu dispositivo possui uma câmera funcionando</li>
                    <li>Não há outros aplicativos usando a câmera</li>
                </ul>
            </div>
        );
    }

    // Render the scanner container
    return (
        <div
            id="qr-reader"
            className="w-full max-w-sm mx-auto rounded-lg overflow-hidden"
        />
    );
});

QRCodeScanner.displayName = "QRCodeScanner";
