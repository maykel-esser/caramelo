import Link from "next/link";
import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import { NewPasswordInput } from "components/pages/poc/form/password";
import { Button, PasswordInput } from "@mantine/core";

export default function Page() {
    return (
        <>
            <NavigationMenu source="client" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Alterar sua senha"
                    backToPreviousPage={true}
                />
                <section>
                    <form>
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
                            type="submit"
                            component={Link}
                            href="/poc/client/profile"
                        >
                            Atualizar dados
                        </Button>
                    </form>
                </section>
            </main>
        </>
    );
}
