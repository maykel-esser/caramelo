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
                    title="Lista de usuários"
                    backToPreviousPage={true}
                    action="add"
                    actionHref="/poc/client/profile/business-profile/users/add"
                />
                <section>
                    <ul>
                        <UserList
                            name="Maykel Esser"
                            status={RESOURCE_STATUS.ACTIVE}
                            href="/poc/client/profile/business-profile/users/details"
                        />
                        <UserList
                            name="Luana Ebbinghaus"
                            status={RESOURCE_STATUS.UNAVAILABLE}
                            href="/poc/client/profile/business-profile/users/details"
                        />
                    </ul>
                </section>
            </main>
        </>
    );
}
