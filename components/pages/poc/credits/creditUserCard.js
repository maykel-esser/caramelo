import { formatDate } from "/utils/date.utils";
import { useDisclosure } from "@mantine/hooks";
import { Button, Drawer, Popover, NumberInput, Accordion } from "@mantine/core";

// Icons
import {
    ClockIcon,
    TrashIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function CreditUserCard(props) {
    const [openedEditCredit, { open: openEditCredit, close: closeEditCredit }] =
        useDisclosure(false);
    const [
        openedReleaseCredit,
        { open: openReleaseCredit, close: closeReleaseCredit },
    ] = useDisclosure(false);

    // Extracting props for easier access
    const { credits, credit_needed, title } = props.data;

    // Limit displayed credits to the required amount
    const displayedCredits = credits.slice(0, credit_needed);

    // Calculate extra credits (if there are more than needed)
    const extraCredits =
        credits.length > credit_needed ? credits.length - credit_needed : 0;

    // Calculate the number of empty slots needed to complete the card
    const emptySlots = credit_needed - displayedCredits.length;

    return (
        <>
            <div className="mb-8 pb-8 border-b">
                {/* Card title */}
                <h3 className="mb-4 font-bold">{title}</h3>

                {/* Credits grid */}
                <div className="border-2 rounded-xl p-4 mb-4 grid grid-cols-5 gap-4">
                    {/* Render the available credits */}
                    {displayedCredits.map((credit, index) => (
                        <Popover position="top" key={index}>
                            <Popover.Target>
                                <div className="border border-yellow-400 bg-yellow-400 rounded-md h-10"></div>
                            </Popover.Target>
                            <Popover.Dropdown>
                                <div className="flex items-center gap-2">
                                    <ClockIcon className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm text-gray-400 leading-3">
                                            Adquirido em
                                        </p>
                                        <p>
                                            {formatDate({
                                                date: credit.datetime,
                                                format: "DD/MM/YYYY HH:mm",
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </Popover.Dropdown>
                        </Popover>
                    ))}

                    {/* Render empty slots if needed */}
                    {Array.from({ length: emptySlots }).map((_, index) => (
                        <div
                            key={`empty-${index}`}
                            className="border rounded-md h-10"
                        ></div>
                    ))}
                </div>

                {/* Show extra credits message if applicable */}
                {extraCredits > 0 && (
                    <p className="text-sm text-gray-500">
                        Créditos excedentes: {extraCredits}
                    </p>
                )}

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <Button variant="outline" onClick={openEditCredit}>
                        Editar
                    </Button>
                    <Button
                        disabled={credits.length < credit_needed}
                        onClick={openReleaseCredit}
                    >
                        Resgatar
                    </Button>
                </div>
            </div>

            {/* Edit credits drawer */}
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
                    <h3 className="font-bold mb-4">{title}</h3>
                    <form className="text-left">
                        <Accordion
                            label="Remover itens"
                            chevron={<ChevronDownIcon className="w-5 h-5" />}
                            unstyled
                            className="mb-4"
                        >
                            <Accordion.Item value="Listar créditos">
                                <Accordion.Control className="font-bold flex w-full flex-row-reverse justify-between p-4 bg-white border border-black rounded-xl">
                                    <p>Remover créditos</p>
                                </Accordion.Control>
                                <Accordion.Panel className="mt-4">
                                    {credits.map((credit, index) => (
                                        <div
                                            className="flex justify-between items-center mb-4 p-4 bg-gray-50 rounded-xl font-bold"
                                            key={index}
                                        >
                                            <p>
                                                {formatDate({
                                                    date: credit.datetime,
                                                    format: "DD/MM/YYYY HH:mm",
                                                })}
                                            </p>
                                            <TrashIcon className="w-6 text-red-500" />
                                        </div>
                                    ))}
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
                            onClick={() => {
                                closeEditCredit();
                                props.closeViewCredit();
                            }}
                        >
                            Salvar alterações
                        </Button>
                    </form>
                </div>
            </Drawer>

            {/* Redeem credits drawer */}
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
                        Você deseja resgatar os créditos deste cartão? Com isso,
                        os créditos serão debitados.
                    </p>
                    <p>
                        <strong>Esta ação não poderá ser desfeita.</strong>
                    </p>
                    <div className="mt-6">
                        <Button
                            onClick={() => {
                                closeReleaseCredit();
                                props.closeViewCredit();
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
