import Link from "next/link";
import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import { Button, TextInput } from "@mantine/core";

export default function Page() {
    return (
        <>
            <NavigationMenu source="client" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Dados Cadastrais"
                    backToPreviousPage={true}
                />
                <section>
                    <form>
                        <div className="mb-4">
                            <TextInput
                                label="Nome do estabelecimento"
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
                                label="Documento"
                                placeholder="Seu documento (CPF/CNPJ)"
                                required
                                size="md"
                                radius="md"
                            />
                        </div>
                        <Button
                            size="lg"
                            radius="md"
                            fullWidth
                            color="black"
                            component={Link}
                            href="/poc/client/profile/business-profile"
                        >
                            Atualizar dados
                        </Button>
                    </form>
                </section>
            </main>
        </>
    );
}
