import Link from "next/link";
import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import { formatDate } from "/utils/date.utils";
import { useDisclosure } from "@mantine/hooks";
import { Button, Drawer, TextInput } from "@mantine/core";
import { mask } from "utils/mask.utils";
import { IMaskInput } from "react-imask";

export default function Page() {
    const [openedRemove, { open: openRemove, close: closeRemove }] =
        useDisclosure(false);
    const [openedEdit, { open: openEdit, close: closeEdit }] =
        useDisclosure(false);

    return (
        <>
            <NavigationMenu source="client" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Usuários"
                    backToPreviousPage={true}
                    action="edit"
                    onActionClick={openEdit}
                />
                <section>
                    <div className="mb-6 flex gap-4">
                        <div>
                            <p className="text-sm font-bold">Nome</p>
                            <p className="text-lg font-bold">Maykel Esser</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white p-4 rounded-lg">
                            <p className="text-sm font-bold">Cadastrado em</p>
                            <p>
                                {formatDate({
                                    date: "2024-12-30T13:53:05.535Z",
                                    format: "DD/MM/YYYY HH:MM",
                                })}
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <p className="text-sm font-bold">Telefone</p>
                            <p>{mask("41984012834", "(00) 00000-0000")}</p>
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        size="lg"
                        radius="md"
                        fullWidth
                        color="red"
                        onClick={openRemove}
                    >
                        Desativar
                    </Button>
                </section>
            </main>
            <Drawer
                opened={openedRemove}
                size="290px"
                onClose={closeRemove}
                offset={8}
                position="bottom"
                radius="lg"
                overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
            >
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">
                        Confirme sua ação
                    </h1>
                    <p>
                        Você deseja desativar este usuário? Com isso, os atuais
                        acessos dados a este usuário será perdido.
                    </p>
                    <p>
                        <strong>Esta ação não poderá ser desfeita.</strong>
                    </p>
                    <div className="mt-6">
                        <Button
                            size="lg"
                            radius="md"
                            fullWidth
                            color="red"
                            component={Link}
                            href="/poc/client/profile/business-profile/users"
                        >
                            Desativar
                        </Button>
                    </div>
                </div>
            </Drawer>
            <Drawer
                opened={openedEdit}
                size="360px"
                onClose={closeEdit}
                offset={8}
                position="bottom"
                radius="lg"
                overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
            >
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Editar usuário</h1>
                    <form className="text-left">
                        <div className="mb-4">
                            <TextInput
                                label="Nome"
                                placeholder="Seu nome completo"
                                required
                                size="md"
                                radius="md"
                                value="Maykel Esser"
                            />
                        </div>
                        <div className="mb-4">
                            <TextInput
                                component={IMaskInput}
                                mask="(00) 00000-0000"
                                label="Telefone"
                                placeholder="Telefone de contato"
                                required
                                size="md"
                                radius="md"
                                value="41984012834"
                            />
                        </div>
                        <div className="mt-6">
                            <Button
                                size="lg"
                                radius="md"
                                fullWidth
                                color="black"
                            >
                                Atualizar dados
                            </Button>
                        </div>
                    </form>
                </div>
            </Drawer>
        </>
    );
}
