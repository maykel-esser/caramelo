import Link from "next/link";
import { NewPasswordInput } from "components/pages/poc/form/password";
import { Button, PasswordInput } from "@mantine/core";

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-screen p-10">
            <div className="w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-5">Crie uma nova senha</h1>
                <form className="text-left">
                    <div className="mb-4">
                        <NewPasswordInput placeholder="Digite a nova senha" />
                    </div>
                    <div className="mb-8">
                        <PasswordInput
                            placeholder="Confirme sua nova senha"
                            required
                            size="md"
                            radius="md"
                        />
                    </div>
                    <Button
                        variant="filled"
                        fullWidth
                        size="lg"
                        radius="md"
                        type="submit"
                        color="black"
                        component={Link}
                        href="/poc/forgot-my-password/success"
                    >
                        Validar
                    </Button>
                </form>
            </div>
        </div>
    );
}
