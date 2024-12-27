import dynamic from "next/dynamic";

// Dynamic imports (lottie need to run at client-side only)
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

// Images
import LogoAnimated from "/public/images/logos/logo-caramelo-lottie-text.json";

export default function Page() {
    const logoOptions = {
        loop: true,
        autoplay: true,
        animationData: LogoAnimated,
    };

    return (
        <>
            <div className="text-center p-16">
                <div className="flex justify-center mb-20">
                    <Lottie options={logoOptions} height={200} width={200} />
                </div>
                <p className="mb-8">
                    O Caramelo® é um app para empreendedores e seus clientes
                    abolirem de vez os cartõezinhos de papel que são utilizados
                    para contabilizar créditos em troca de um benefício. Chega
                    de carimbinho! Além da questão ambiental, o Caramelo®
                    centraliza todos seus cartões em um meio digital fácil,
                    confiável e rápido. Clientes podem buscar diretamente no
                    appquais estabelecimentos aceitam Caramelo®!
                </p>
                <p className="font-bold">
                    Assim como o cachorro caramelo, ícone brasileiro, o app é
                    seu companheiro! Fiel, assim como os clientes!
                </p>
                <p>
                    <small>Em construção. Previsão - 2025</small>
                </p>
            </div>
        </>
    );
}
