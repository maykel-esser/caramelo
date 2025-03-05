import Link from "next/link";
import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import { Button, TextInput, Select } from "@mantine/core";

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
                                label="Documento"
                                placeholder="Seu documento (CPF/CNPJ)"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <Select
                                label="Segmento"
                                placeholder="Selecione o segmento"
                                required
                                size="md"
                                radius="md"
                                data={[
                                    { value: "1", label: "Barbearia" },
                                    { value: "2", label: "Salão de beleza" },
                                    { value: "3", label: "Alimentação" },
                                    { value: "4", label: "Petshop" },
                                    { value: "5", label: "Outros" },
                                ]}
                            />
                        </div>
                        <Button
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
