import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export const QRCodeScanner = forwardRef(({ onScan, onError }, ref) => {
    const scannerRef = useRef(null);
    const [hasCamera, setHasCamera] = useState(true);

    // Lista de erros que devem ser ignorados
    const ignoredErrors = [
        'No barcode or QR code detected.',
        'NotFoundException: No MultiFormat Readers were able to detect the code.'
    ];

    // Handler de erro filtrado
    const handleError = (errorMessage) => {
        // Ignora erros comuns de "QR code não encontrado"
        if (ignoredErrors.some(error => errorMessage.includes(error))) {
            return;
        }

        // Reporta outros erros
        onError?.(errorMessage);
    };

    useImperativeHandle(ref, () => ({
        stop: async () => {
            try {
                if (scannerRef.current && scannerRef.current.isScanning) {
                    await scannerRef.current.stop();

                    const element = document.getElementById('qr-reader');
                    if (element) {
                        while (element.firstChild) {
                            element.removeChild(element.firstChild);
                        }
                    }

                    scannerRef.current = null;
                }
            } catch (error) {
                console.error('Error stopping scanner:', error);
            }
        }
    }));

    useEffect(() => {
        const checkCamera = async () => {
            try {
                const devices = await navigator.mediaDevices.enumerateDevices();
                const hasVideoDevice = devices.some(device => device.kind === 'videoinput');
                setHasCamera(hasVideoDevice);

                if (!hasVideoDevice) {
                    onError?.('Nenhuma câmera encontrada');
                    return;
                }

                const scanner = new Html5Qrcode("qr-reader");
                scannerRef.current = scanner;

                await scanner.start(
                    { facingMode: "environment" },
                    {
                        fps: 10,
                        qrbox: { width: 250, height: 250 },
                    },
                    (decodedText) => {
                        onScan(decodedText);
                    },
                    (errorMessage) => {
                        handleError(errorMessage);
                    }
                ).catch((err) => {
                    setHasCamera(false);
                    onError?.(err.message);
                });
            } catch (error) {
                setHasCamera(false);
                onError?.(error.message);
            }
        };

        checkCamera();

        return () => {
            if (scannerRef.current) {
                scannerRef.current.stop().catch(() => {
                    // Ignora erro ao parar o scanner durante cleanup
                });

                const element = document.getElementById('qr-reader');
                if (element) {
                    while (element.firstChild) {
                        element.removeChild(element.firstChild);
                    }
                }

                scannerRef.current = null;
            }
        };
    }, [onScan, onError]);

    if (!hasCamera) {
        return (
            <div className="w-full max-w-sm mx-auto p-6 bg-red-50 rounded-lg text-center">
                <ExclamationTriangleIcon className="w-12 h-12 mx-auto mb-4 text-red-500" />
                <h3 className="text-lg font-bold text-red-700 mb-2">
                    Câmera não disponível
                </h3>
                <p className="text-red-600">
                    Não foi possível acessar a câmera do seu dispositivo.
                    Por favor, verifique se:
                </p>
                <ul className="text-red-600 text-sm mt-2 list-disc list-inside">
                    <li>Você permitiu o acesso à câmera</li>
                    <li>Seu dispositivo possui uma câmera funcionando</li>
                    <li>Não há outros aplicativos usando a câmera</li>
                </ul>
            </div>
        );
    }

    return (
        <div id="qr-reader" className="w-full max-w-sm mx-auto rounded-lg overflow-hidden" />
    );
});

QRCodeScanner.displayName = 'QRCodeScanner';
