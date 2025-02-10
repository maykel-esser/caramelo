import Link from "next/link";
import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import { Button, NumberInput, TextInput, Divider } from "@mantine/core";
import { IMaskInput } from "react-imask";

// Icons
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function Page() {
    return (
        <>
            <NavigationMenu source="client" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Adicionar Cliente"
                    backToPreviousPage={true}
                />
                <section>
                    <form>
                        <div className="p-4 bg-white rounded-xl mb-8 flex gap-4 items-start">
                            <ExclamationCircleIcon className="w-36 flex-grow" />
                            <div className="text-sm">
                                <p className="mb-4">
                                    <strong>
                                        Você pode adicionar rapidamente um
                                        cliente apenas com seu número de
                                        telefone.
                                    </strong>{" "}
                                    O cliente poderá completar seu cadastro
                                    depois, agilizando seu atendimento.
                                </p>
                                <p className="mb-4">
                                    Aproveite também para adicionar rapidamente
                                    créditos a este usuário em seus cartões já
                                    cadastrados.
                                </p>
                                <p>
                                    Atenção: Não é necessário cadastrar uma
                                    senha. Uma senha temporária será enviada por
                                    SMS no telefone de cadastro.
                                </p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <TextInput
                                label="Telefone"
                                placeholder="Telefone (com DDD)"
                                required
                                size="md"
                                radius="md"
                                component={IMaskInput}
                                mask="(00) 00000-0000"
                            />
                        </div>
                        <div className="mb-4">
                            <TextInput
                                label="Nome do usuário"
                                description="Opcional"
                                placeholder="Nome completo"
                                size="md"
                                radius="md"
                            />
                        </div>
                        <Divider className="my-8" />
                        <h3 className="font-bold mb-4 text-center">
                            Adicione rapidamente créditos
                        </h3>
                        <div className="p-4 bg-white rounded-xl mb-4">
                            <NumberInput
                                label="A cada 10 serviços, ganhe um corte"
                                placeholder="0"
                                size="md"
                                radius="md"
                                min={1}
                            />
                        </div>
                        <div className="p-4 bg-white rounded-xl mb-4">
                            <NumberInput
                                label="A cada 10 cervejas, ganhe uma"
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
                            component={Link}
                            href="/poc/client/clients"
                        >
                            Cadastrar
                        </Button>
                    </form>
                </section>
            </main>
        </>
    );
}
