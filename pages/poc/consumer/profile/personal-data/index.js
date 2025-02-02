import Link from "next/link";
import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import { Button, TextInput } from "@mantine/core";

export default function Page() {
    return (
        <>
            <NavigationMenu source="consumer" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Dados Pessoais"
                    backToPreviousPage={true}
                />
                <section>
                    <form>
                        <div className="mb-4">
                            <TextInput
                                label="Seu nome"
                                placeholder="Nome"
                                required
                                size="md"
                                radius="md"
                            />
                        </div>
                        <div className="mb-4">
                            <TextInput
                                label="Telefone"
                                placeholder="Telefone"
                                required
                                size="md"
                                radius="md"
                            />
                        </div>
                        <div className="mb-4">
                            <TextInput
                                label="Seu e-mail"
                                placeholder="E-mail"
                                required
                                size="md"
                                radius="md"
                                type="email"
                            />
                        </div>
                        <Button
                            size="lg"
                            radius="md"
                            fullWidth
                            color="black"
                            component={Link}
                            href="/poc/consumer/profile"
                        >
                            Atualizar dados
                        </Button>
                    </form>
                </section>
            </main>
        </>
    );
}
