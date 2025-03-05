import Link from "next/link";
import { IMaskInput } from "react-imask";
import { TextInput, Button } from "@mantine/core";
import { NewPasswordInput } from "components/pages/poc/form/password";

// Icons
import { PhoneIcon } from "@heroicons/react/24/outline";

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-screen p-8">
            <div className="w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-5">
                    Eu quero usar para mim
                </h1>
                <p>
                    <strong>O cadastro é bem simples e rápido.</strong>
                </p>
                <p className="mb-8">
                    Ah, caso você já tenha um telefone cadastrado, você será
                    redirecionado para recuperar sua senha e continuar usando
                    sua conta criada anteriormente!
                </p>
                <form className="text-left">
                    <div className="mb-4">
                        <TextInput
                            placeholder="Seu nome"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <TextInput
                            placeholder="Digite um telefone"
                            required
                            component={IMaskInput}
                            mask="(00) 00000-0000"
                            leftSection={<PhoneIcon className="w-5" />}
                        />
                    </div>
                    <div className="mb-8">
                        <NewPasswordInput placeholder="Sua senha" />
                    </div>
                    <Button
                        type="submit"
                        component={Link}
                        href="/poc/signup/consumer/token"
                    >
                        Vamos nessa
                    </Button>
                </form>
            </div>
        </div>
    );
}
