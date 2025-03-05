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
                            />
                        </div>
                        <div className="mb-4">
                            <TextInput
                                label="Telefone"
                                placeholder="Telefone"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <TextInput
                                label="Seu e-mail"
                                placeholder="E-mail"
                                required
                                type="email"
                            />
                        </div>
                        <Button component={Link} href="/poc/consumer/profile">
                            Atualizar dados
                        </Button>
                    </form>
                </section>
            </main>
        </>
    );
}
