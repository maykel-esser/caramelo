import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import UserList from "components/pages/poc/user/userList";

// Consts
import { RESOURCE_STATUS } from "constants/status.constants";

export default function Page() {
    return (
        <>
            <NavigationMenu source="client" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Clientes"
                    backToPreviousPage={true}
                    action="add"
                    actionHref="/poc/client/clients/add"
                />
                <section>
                    <UserList
                        name="Maykel Esser"
                        status={RESOURCE_STATUS.ACTIVE}
                        href="/poc/client/clients/details"
                        phone="41984012834"
                    />
                    <UserList
                        name="Salun Marvin"
                        status={RESOURCE_STATUS.ACTIVE}
                        href="/poc/client/clients/details"
                        phone="47992922092"
                    />
                    <UserList
                        name="Não identificado"
                        status={RESOURCE_STATUS.ACTIVE}
                        href="/poc/client/clients/details"
                        phone="41832521060"
                    />
                    <UserList
                        name="Luana Ebbinghaus"
                        status={RESOURCE_STATUS.UNAVAILABLE}
                        href="/poc/client/clients/details"
                        phone="41988088793"
                    />
                </section>
            </main>
        </>
    );
}
