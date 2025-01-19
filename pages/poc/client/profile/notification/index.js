import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import NotificationItem from "components/pages/poc/list/notification-item";

// Icons
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Page() {
    return (
        <>
            <NavigationMenu source="client" />
            <main className="px-4 pb-32">
                <ActionHeader title="Notificações" backToPreviousPage={true} />
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
        </>
    );
}
