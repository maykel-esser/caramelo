import Link from "next/link";
import { IMaskInput } from "react-imask";
import { TextInput, Button } from "@mantine/core";

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
                    <div className="mb-3">
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
                    <Button
                        variant="filled"
                        fullWidth
                        size="md"
                        radius="md"
                        type="submit"
                        color="black"
                        component={Link}
                        href="/poc/forgot-my-password/validation"
                    >
                        Enviar código
                    </Button>
                </form>
            </div>
        </div>
    );
}
