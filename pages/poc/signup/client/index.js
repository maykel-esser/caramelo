import Link from "next/link";
import { IMaskInput } from "react-imask";
import { TextInput, Button } from "@mantine/core";

// Icons
import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-screen p-10">
            <div className="w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-5">
                    Eu quero usar para minha empresa
                </h1>
                <p className="mb-8">
                    Obrigado pelo interesse no Caramelo®! Estamos em fase
                    inicial, junte-se a nós! Tenha acesso gratuito ao Caramelo®
                    por 6 meses e compartilhe seus valiosos feedbacks. Preencha
                    o formulário abaixo, e faremos contato em breve. Seja parte
                    dessa inovação e transforme a experiência de fidelidade para
                    seus clientes!
                </p>
                <form className="text-left">
                    <div className="mb-4">
                        <TextInput
                            placeholder="Nome da empresa"
                            required
                            size="md"
                            radius="md"
                        />
                    </div>
                    <div className="mb-4">
                        <TextInput
                            placeholder="Digite um e-mail para contato"
                            required
                            size="md"
                            radius="md"
                            leftSection={<EnvelopeIcon className="w-5" />}
                        />
                    </div>
                    <div className="mb-4">
                        <TextInput
                            placeholder="Digite um telefone/whatsapp para contato"
                            required
                            size="md"
                            radius="md"
                            component={IMaskInput}
                            mask="(00) 00000-0000"
                            leftSection={<PhoneIcon className="w-5" />}
                        />
                    </div>
                    <div className="mb-8">
                        <TextInput
                            placeholder="Cidade da empresa"
                            required
                            size="md"
                            radius="md"
                            leftSection={<MapPinIcon className="w-5" />}
                        />
                    </div>
                    <Button
                        variant="filled"
                        fullWidth
                        size="md"
                        radius="md"
                        type="submit"
                        color="black"
                        component={Link}
                        href="/poc/signup/client/success"
                    >
                        Quero experimentar
                    </Button>
                </form>
            </div>
        </div>
    );
}
