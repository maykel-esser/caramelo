import Link from "next/link";
import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import { formatDate } from "/utils/date.utils";
import { useDisclosure } from "@mantine/hooks";
import { Button, Drawer, TextInput } from "@mantine/core";

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
                    title="Cartões"
                    backToPreviousPage={true}
                    action="edit"
                    onActionClick={openEdit}
                />
                <section>
                    <div className="mb-6 flex gap-4">
                        <div>
                            <p className="text-sm font-bold">Promoção</p>
                            <p className="text-lg font-bold">
                                A cada 10 serviços, ganhe um corte
                            </p>
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
                            <p className="text-sm font-bold">
                                Créditos expiram em
                            </p>
                            <p>12 meses</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="bg-white p-4 rounded-lg">
                            <p className="text-sm font-bold leading-4 mb-2">
                                Créditos necessários
                            </p>
                            <p className="text-2xl font-bold">10</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <p className="text-sm font-bold leading-4 mb-2">
                                Clientes utilizando
                            </p>
                            <p className="text-2xl font-bold">23</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <p className="text-sm font-bold leading-4 mb-2">
                                Créditos cedidos
                            </p>
                            <p className="text-2xl font-bold">48</p>
                        </div>
                    </div>
                    <Button variant="outline" color="red" onClick={openRemove}>
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
                        Você deseja desativar este cartão? Com isso, os atuais
                        créditos dados a clientes serão perdidos.
                    </p>
                    <p>
                        <strong>Esta ação não poderá ser desfeita.</strong>
                    </p>
                    <div className="mt-6">
                        <Button
                            color="red"
                            component={Link}
                            href="/poc/client/cards"
                        >
                            Desativar
                        </Button>
                    </div>
                </div>
            </Drawer>
            <Drawer
                opened={openedEdit}
                size="290px"
                onClose={closeEdit}
                offset={8}
                position="bottom"
                radius="lg"
                overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
            >
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Editar cartão</h1>
                    <form className="text-left">
                        <div className="mb-4">
                            <TextInput
                                label="Título da promoção"
                                placeholder="Título"
                                required
                                value="A cada 10 serviços, ganhe um corte"
                            />
                        </div>
                        <div className="mt-6">
                            <Button>Atualizar dados</Button>
                        </div>
                    </form>
                </div>
            </Drawer>
        </>
    );
}
