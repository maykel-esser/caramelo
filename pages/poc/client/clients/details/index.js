import Link from "next/link";
import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import { formatDate } from "/utils/date.utils";
import { useDisclosure } from "@mantine/hooks";
import { Button, Drawer, TextInput, Divider, Popover, NumberInput, Accordion } from "@mantine/core";
import { mask } from "utils/mask.utils";
import { IMaskInput } from "react-imask";

// Icons
import { ClockIcon, TrashIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Page() {
    const [openedRemove, { open: openRemove, close: closeRemove }] =
        useDisclosure(false);
    const [openedEdit, { open: openEdit, close: closeEdit }] =
        useDisclosure(false);
    const [openedViewCredit, { open: openViewCredit, close: closeViewCredit }] =
        useDisclosure(false);
    const [openedEditCredit, { open: openEditCredit, close: closeEditCredit }] =
        useDisclosure(false);
    const [openedReleaseCredit, { open: openReleaseCredit, close: closeReleaseCredit }] =
        useDisclosure(false);

    return (
        <>
            <NavigationMenu source="client" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Clientes"
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
                        size="lg"
                        radius="md"
                        fullWidth
                        color="black"
                        onClick={openViewCredit}
                        className="mb-4"
                    >
                        Créditos
                    </Button>
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
                            href="/poc/client/clients"
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
                    <h1 className="text-2xl font-bold mb-4">Editar cliente</h1>
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
            <Drawer
                opened={openedViewCredit}
                size="xl"
                onClose={closeViewCredit}
                offset={8}
                position="bottom"
                radius="lg"
                overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
            >
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Créditos</h1>
                    <div>
                        <h3 className="mb-4 font-bold">A cada 10 serviços, ganhe um corte</h3>
                        <div className="border-2 rounded-xl p-4 mb-4 grid grid-cols-5 gap-4">
                            <Popover position="top">
                                <Popover.Target>
                                    <div className="border border-black bg-black rounded-md h-10"></div>
                                </Popover.Target>
                                <Popover.Dropdown>
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-400 leading-3">Adquirido em</p>
                                            <p>15/01/2025 - 21h02</p>
                                        </div>
                                    </div>
                                </Popover.Dropdown>
                            </Popover>
                            <Popover position="top">
                                <Popover.Target>
                                    <div className="border border-black bg-black rounded-md h-10"></div>
                                </Popover.Target>
                                <Popover.Dropdown>
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-400 leading-3">Adquirido em</p>
                                            <p>18/01/2025 - 20h40</p>
                                        </div>
                                    </div>
                                </Popover.Dropdown>
                            </Popover>
                            <Popover position="top">
                                <Popover.Target>
                                    <div className="border border-black bg-black rounded-md h-10"></div>
                                </Popover.Target>
                                <Popover.Dropdown>
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-400 leading-3">Adquirido em</p>
                                            <p>16/01/2025 - 12h31</p>
                                        </div>
                                    </div>
                                </Popover.Dropdown>
                            </Popover>
                            <Popover position="top">
                                <Popover.Target>
                                    <div className="border border-black bg-black rounded-md h-10"></div>
                                </Popover.Target>
                                <Popover.Dropdown>
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-400 leading-3">Adquirido em</p>
                                            <p>21/01/2025 - 23h12</p>
                                        </div>
                                    </div>
                                </Popover.Dropdown>
                            </Popover>
                            <div className="border rounded-md h-10"></div>
                            <div className="border rounded-md h-10"></div>
                            <div className="border rounded-md h-10"></div>
                            <div className="border rounded-md h-10"></div>
                            <div className="border rounded-md h-10"></div>
                            <div className="border rounded-md h-10"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Button
                                variant="outline"
                                size="lg"
                                radius="md"
                                fullWidth
                                color="black"
                                onClick={openEditCredit}
                            >
                                Editar
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                radius="md"
                                fullWidth
                                color="black"
                                disabled
                            >
                                Resgatar
                            </Button>
                        </div>
                    </div>
                    <Divider className="my-8" />
                    <div>
                        <h3 className="mb-4 font-bold">A cada 10 cervejas, ganhe uma</h3>
                        <div className="border-2 rounded-xl p-4 mb-4 grid grid-cols-5 gap-4">
                            <Popover position="top">
                                <Popover.Target>
                                    <div className="border border-black bg-black rounded-md h-10"></div>
                                </Popover.Target>
                                <Popover.Dropdown>
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-400 leading-3">Adquirido em</p>
                                            <p>18/01/2025 - 20h40</p>
                                        </div>
                                    </div>
                                </Popover.Dropdown>
                            </Popover>
                            <Popover position="top">
                                <Popover.Target>
                                    <div className="border border-black bg-black rounded-md h-10"></div>
                                </Popover.Target>
                                <Popover.Dropdown>
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-400 leading-3">Adquirido em</p>
                                            <p>16/01/2025 - 12h31</p>
                                        </div>
                                    </div>
                                </Popover.Dropdown>
                            </Popover>
                            <Popover position="top">
                                <Popover.Target>
                                    <div className="border border-black bg-black rounded-md h-10"></div>
                                </Popover.Target>
                                <Popover.Dropdown>
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-400 leading-3">Adquirido em</p>
                                            <p>21/01/2025 - 23h12</p>
                                        </div>
                                    </div>
                                </Popover.Dropdown>
                            </Popover>
                            <Popover position="top">
                                <Popover.Target>
                                    <div className="border border-black bg-black rounded-md h-10"></div>
                                </Popover.Target>
                                <Popover.Dropdown>
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-400 leading-3">Adquirido em</p>
                                            <p>21/01/2025 - 23h12</p>
                                        </div>
                                    </div>
                                </Popover.Dropdown>
                            </Popover>
                            <Popover position="top">
                                <Popover.Target>
                                    <div className="border border-black bg-black rounded-md h-10"></div>
                                </Popover.Target>
                                <Popover.Dropdown>
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-400 leading-3">Adquirido em</p>
                                            <p>21/01/2025 - 23h12</p>
                                        </div>
                                    </div>
                                </Popover.Dropdown>
                            </Popover>
                            <Popover position="top">
                                <Popover.Target>
                                    <div className="border border-black bg-black rounded-md h-10"></div>
                                </Popover.Target>
                                <Popover.Dropdown>
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-400 leading-3">Adquirido em</p>
                                            <p>21/01/2025 - 23h12</p>
                                        </div>
                                    </div>
                                </Popover.Dropdown>
                            </Popover>
                            <Popover position="top">
                                <Popover.Target>
                                    <div className="border border-black bg-black rounded-md h-10"></div>
                                </Popover.Target>
                                <Popover.Dropdown>
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-400 leading-3">Adquirido em</p>
                                            <p>21/01/2025 - 23h12</p>
                                        </div>
                                    </div>
                                </Popover.Dropdown>
                            </Popover>
                            <Popover position="top">
                                <Popover.Target>
                                    <div className="border border-black bg-black rounded-md h-10"></div>
                                </Popover.Target>
                                <Popover.Dropdown>
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-400 leading-3">Adquirido em</p>
                                            <p>21/01/2025 - 23h12</p>
                                        </div>
                                    </div>
                                </Popover.Dropdown>
                            </Popover>
                            <Popover position="top">
                                <Popover.Target>
                                    <div className="border border-black bg-black rounded-md h-10"></div>
                                </Popover.Target>
                                <Popover.Dropdown>
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-400 leading-3">Adquirido em</p>
                                            <p>21/01/2025 - 23h12</p>
                                        </div>
                                    </div>
                                </Popover.Dropdown>
                            </Popover>
                            <Popover position="top">
                                <Popover.Target>
                                    <div className="border border-black bg-black rounded-md h-10"></div>
                                </Popover.Target>
                                <Popover.Dropdown>
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-400 leading-3">Adquirido em</p>
                                            <p>21/01/2025 - 23h12</p>
                                        </div>
                                    </div>
                                </Popover.Dropdown>
                            </Popover>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Button
                                variant="outline"
                                size="lg"
                                radius="md"
                                fullWidth
                                color="black"
                                onClick={openEditCredit}
                            >
                                Editar
                            </Button>
                            <Button
                                size="lg"
                                radius="md"
                                fullWidth
                                color="black"
                                onClick={openReleaseCredit}
                            >
                                Resgatar
                            </Button>
                        </div>
                    </div>
                </div>
            </Drawer>
            <Drawer
                opened={openedEditCredit}
                size="md"
                onClose={closeEditCredit}
                offset={8}
                position="bottom"
                radius="lg"
                overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
            >
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Editar créditos</h1>
                    <h3 className="font-bold mb-4">A cada 10 serviços, ganhe um corte</h3>
                    <form className="text-left">
                        <Accordion label="Remover itens" chevron={<ChevronDownIcon className="w-5 h-5" />} unstyled className="mb-4">
                            <Accordion.Item value="Listar créditos">
                                <Accordion.Control className="font-bold flex w-full flex-row-reverse justify-between p-4 bg-white border border-black rounded-xl">
                                    <p>Remover créditos</p>
                                </Accordion.Control>
                                <Accordion.Panel className="mt-4">
                                    <div className="flex justify-between items-center mb-4 p-4 bg-gray-50 rounded-xl font-bold">
                                        <p>15/01/2025 - 21h02</p>
                                        <TrashIcon className="w-6 text-red-500" />
                                    </div>
                                    <div className="flex justify-between items-center mb-4 p-4 bg-gray-50 rounded-xl font-bold">
                                        <p>18/01/2025 - 20h40</p>
                                        <TrashIcon className="w-6 text-red-500" />
                                    </div>
                                    <div className="flex justify-between items-center mb-4 p-4 bg-gray-50 rounded-xl font-bold">
                                        <p>16/01/2025 - 12h31</p>
                                        <TrashIcon className="w-6 text-red-500" />
                                    </div>
                                    <div className="flex justify-between items-center mb-4 p-4 bg-gray-50 rounded-xl font-bold">
                                        <p>21/01/2025 - 23h12</p>
                                        <TrashIcon className="w-6 text-red-500" />
                                    </div>
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                        <div className="mb-8">
                            <NumberInput
                                label="Adicione créditos"
                                placeholder="0"
                                size="md"
                                radius="md"
                                min={1}
                            />
                        </div>
                        <Button
                            size="lg"
                            radius="md"
                            fullWidth
                            color="black"
                            onClick={() => {
                                closeEditCredit();
                                closeViewCredit();
                            }}
                        >
                            Salvar alterações
                        </Button>
                    </form>
                </div>
            </Drawer>
            <Drawer
                opened={openedReleaseCredit}
                size="290px"
                onClose={closeReleaseCredit}
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
                        Você deseja resgatar os créditos deste cartão? Com isso, os
                        créditos serão debitados.
                    </p>
                    <p>
                        <strong>Esta ação não poderá ser desfeita.</strong>
                    </p>
                    <div className="mt-6">
                        <Button
                            size="lg"
                            radius="md"
                            fullWidth
                            color="black"
                            onClick={() => {
                                closeReleaseCredit();
                                closeViewCredit();
                            }}
                        >
                            Resgatar créditos
                        </Button>
                    </div>
                </div>
            </Drawer>
        </>
    );
}
