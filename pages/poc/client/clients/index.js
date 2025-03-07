import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import UserList from "components/pages/poc/user/userList";
import { TextInput } from "@mantine/core";

// Consts
import { RESOURCE_STATUS } from "constants/status.constants";

// Icons
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

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
                    <form>
                        <TextInput
                            leftSection={
                                <MagnifyingGlassIcon className="w-5" />
                            }
                            placeholder="Pesquisar por nome ou telefone"
                            required
                            className="mb-8"
                        />
                    </form>
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
