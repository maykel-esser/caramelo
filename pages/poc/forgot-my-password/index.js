import Link from "next/link";
import { IMaskInput } from "react-imask";
import { TextInput, Button, Divider } from "@mantine/core";

// Icons
import { PhoneIcon } from "@heroicons/react/24/outline";

export default function Page() {
    return (
        <div className="flex items-center justify-center p-10 min-h-screen">
            <div className="w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-5">
                    Criar uma nova senha
                </h1>
                <p className="mb-5">
                    Digite seu telefone no campo abaixo para que possamos enviar
                    um código de recuperação de senha para lá em um SMS:
                </p>
                <form>
                    <div className="mb-4">
                        <TextInput
                            leftSection={<PhoneIcon className="w-5" />}
                            placeholder="Seu telefone"
                            required
                            component={IMaskInput}
                            mask="(00) 00000-0000"
                            size="md"
                            radius="md"
                        />
                    </div>
                    <Button variant="filled" type="submit">
                        Enviar código
                    </Button>
                    <Divider label="ou" my="lg" />
                    <Button component={Link} href="/poc" variant="outline">
                        Voltar para o login
                    </Button>
                </form>
            </div>
        </div>
    );
}
