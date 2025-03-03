import Link from "next/link";
import Image from "next/image";
import { Button } from "@mantine/core";

// Images
import SignUpBusinessSuccess from "public/images/signup/signup-business-success.png";

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-screen p-8">
            <div className="w-full max-w-md text-center">
                <div className="mb-14 flex justify-center">
                    <Image src={SignUpBusinessSuccess} alt="Obrigado" />
                </div>
                <h1 className="text-2xl font-bold mb-5">
                    Obrigado pelo seu interesse!
                </h1>
                <p>
                    Em breve, entraremos em contato para fornecer mais
                    informações sobre o programa de teste gratuito por 6 meses.
                </p>
                <p>
                    Estamos ansiosos para trabalhar em conjunto. Fique atento ao
                    seu email e telefone, pois entraremos em contato em breve.
                    Obrigado novamente por se juntar ao Caramelo® e ajudar a
                    moldar o futuro da fidelidade digital!
                </p>
                <Button component={Link} href="/poc" my="xl">
                    Volte para a página inicial
                </Button>
            </div>
        </div>
    );
}
