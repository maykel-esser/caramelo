import Image from "next/image";

// Images
import CancelAccountImage from "public/images/cancel-account/account-cancelled.png";

export default function Page() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen p-10">
                <section className="text-center">
                    <div className="flex justify-center">
                        <Image
                            src={CancelAccountImage}
                            alt="Sentiremos sua falta!"
                            className="p-8"
                        />
                    </div>
                    <h1 className="text-2xl font-bold mb-4">
                        Sua conta foi removida com sucesso
                    </h1>
                    <p>
                        Agradecemos pelo tempo que passamos juntos. Esperamos
                        que tenha sido uma experiência agradável no Caramelo®!
                    </p>
                </section>
            </div>
        </>
    );
}
