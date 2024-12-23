import Image from "next/image";

// Images
import Logo from "/public/images/logos/logo-caramelo-vertical.png";

export default function Page() {
    return (
        <>
            <h1>Oi Michel</h1>
            <div className="text-center p-16">
                <div className="flex justify-center mb-20">
                    <Image src={Logo} alt="®" width={200} />
                </div>
                <p className="mb-8">O Caramelo® é um app para empreendedores e seus clientes abolirem de vez os cartõezinhos de papel que são utilizados para contabilizar créditos em troca de um benefício. Chega de carimbinho! Além da questão ambiental, o Caramelo® centraliza todos seus cartões em um meio digital fácil, confiável e rápido. Clientes podem buscar diretamente no appquais estabelecimentos aceitam Caramelo®!</p>
                <p className="font-bold">Assim como o cachorro caramelo, ícone brasileiro, o app é seu companheiro! Fiel, assim como os clientes!</p>
                <p>
                    <small>Em construção. Previsão - 2025</small>
                </p>
            </div>
        </>
    );
}
