import Link from "next/link";
import Image from "next/image";
import { Button } from "@mantine/core";

// Images
import SignUpBusinessSuccess from "/public/images/signup/signup-business-success.png";

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-screen p-10">
            <div className="w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-5">Tudo pronto!</h1>
                <div className="mb-14 flex justify-center">
                    <Image src={SignUpBusinessSuccess} alt="Obrigado" />
                </div>
                <p>
                    <strong>Você alterou sua senha!</strong>
                </p>
                <p>Aproveite que já está por aqui e faça o login novamente</p>
                <Button
                    component={Link}
                    href="/poc"
                    size="lg"
                    radius="md"
                    my="xl"
                    fullWidth
                    color="black"
                >
                    Vamos nessa
                </Button>
            </div>
        </div>
    );
}
