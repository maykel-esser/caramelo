import Link from "next/link";
import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import { Button } from "@mantine/core";

// Icons
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function Page() {
    return (
        <>
            <NavigationMenu source="consumer" />
            <main className="px-4 pb-32">
                <ActionHeader title="Ajuda" backToPreviousPage={true} />
                <section>
                    <div className="p-4 bg-white rounded-xl mb-8 flex gap-4 items-center">
                        <ExclamationCircleIcon className="w-36 flex-grow" />
                        <p>
                            Estamos construindo uma área de ajuda melhor para
                            você. Até que ela fique pronta, fique livre para
                            entrar em contato com nosso suporte no WhatsApp para
                            tirar qualquer dúvida
                        </p>
                    </div>
                    <Button
                        variant="filled"
                        fullWidth
                        size="lg"
                        radius="md"
                        color="black"
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
