import Link from "next/link";
import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import { Button } from "@mantine/core";

export default function Page() {
    return (
        <>
            <NavigationMenu source="client" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Encerrar Conta Estabelecimento"
                    backToPreviousPage={true}
                />
                <section>
                    <p className="mb-8 text-center">
                        Para contas de negócio, o encerramento de contas é feito
                        estritamente através do suporte. Entre em contato no
                        botão abaixo para continuar.
                    </p>
                    <Button
                        component={Link}
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=5541984012834"
                    >
                        Falar com suporte
                    </Button>
                </section>
            </main>
        </>
    );
}
