import Link from "next/link";
import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import { formatDate } from "/utils/date.utils";
import { Button, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Page() {
    const [
        openedSubscription,
        { open: openSubscription, close: closeSubscription },
    ] = useDisclosure(false);

    return (
        <>
            <NavigationMenu source="client" />
            <main className="px-4 pb-32">
                <ActionHeader title="Alterar plano" backToPreviousPage={true} />
                <section>
                    <div className="mb-6 flex gap-4">
                        <div>
                            <p className="text-sm font-bold">Plano atual</p>
                            <p className="text-lg font-bold">
                                Beta Testers Pro
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white p-4 rounded-lg">
                            <p className="text-sm font-bold">Encerra em</p>
                            <p>
                                {formatDate({
                                    date: "2025-06-30T13:53:05.535Z",
                                    format: "DD/MM/YYYY HH:MM",
                                })}
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <p className="text-sm font-bold">Valor</p>
                            <p>R$9,90/mês</p>
                        </div>
                    </div>
                    <Button variant="outline" onClick={openSubscription}>
                        Gerenciar Assinatura
                    </Button>
                </section>
            </main>
            <Drawer
                opened={openedSubscription}
                size="290px"
                onClose={closeSubscription}
                offset={8}
                position="bottom"
                radius="lg"
                overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
            >
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">
                        Gerenciar Assinatura
                    </h1>
                    <p>
                        No momento as assinaturas são gerenciáveis apenas pelo
                        nosso site ou time de suporte.
                    </p>
                    <p>
                        <strong>Deseja acessar nosso site?</strong>
                    </p>
                    <div className="mt-6">
                        <Button
                            component={Link}
                            target="_blank"
                            href="https://appcaramelo.com.br"
                        >
                            Vamos nessa
                        </Button>
                    </div>
                </div>
            </Drawer>
        </>
    );
}
