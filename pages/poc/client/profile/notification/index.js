import Link from "next/link";
import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import NotificationItem from "components/pages/poc/list/notification-item";
import { useDisclosure } from "@mantine/hooks";
import { Button, Drawer } from "@mantine/core";

// Icons
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Page() {
    const [
        openedClearNotifications,
        { open: openClearNotifications, close: closeClearNotifications },
    ] = useDisclosure(false);

    return (
        <>
            <NavigationMenu source="client" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Notificações"
                    backToPreviousPage={true}
                    action="clear"
                    onActionClick={openClearNotifications}
                />
                <section>
                    <ul>
                        <NotificationItem
                            title="Seu trial está quase expirando"
                            content="Aproveite para fazer a renovação com preço promocional."
                            date={new Date()}
                            icon={ExclamationTriangleIcon}
                            seeDetailsIcon={true}
                            read={false}
                        />
                        <NotificationItem
                            title="Atualize seu endereço"
                            content="Seja encontrado pelos seus clientes em nossa busca no app. Para isso, mantenha seu endereço em dia!"
                            date={new Date()}
                            icon={ExclamationTriangleIcon}
                            seeDetailsIcon={true}
                            read={true}
                        />
                        <NotificationItem
                            title="Resgate autorizado"
                            content="Você autorizou o resgate do cartão de Maykel Esser para o cartão <u>A cada 10 serviços, ganhe um corte.</u>"
                            date={new Date()}
                            icon={ExclamationTriangleIcon}
                            seeDetailsIcon={true}
                            read={true}
                        />
                    </ul>
                </section>
            </main>
            <Drawer
                opened={openedClearNotifications}
                size="290px"
                onClose={closeClearNotifications}
                offset={8}
                position="bottom"
                radius="lg"
                overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
            >
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">
                        Confirme sua ação
                    </h1>
                    <p>Limpar todas as notificações?</p>
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
                            href="/poc/client/profile"
                        >
                            Limpar
                        </Button>
                    </div>
                </div>
            </Drawer>
        </>
    );
}
