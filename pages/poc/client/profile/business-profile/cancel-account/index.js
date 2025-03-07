import ListItem from "components/pages/poc/list/item";
import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";

import { BuildingStorefrontIcon, UserIcon } from "@heroicons/react/24/outline";

export default function Page() {
    return (
        <>
            <NavigationMenu source="client" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Encerrar Conta"
                    backToPreviousPage={true}
                />
                <section>
                    <ul>
                        <ListItem
                            href="/poc/client/profile/cancel-account"
                            title="Encerrar meu acesso pessoal"
                            icon={UserIcon}
                            seeDetailsIcon={true}
                        />
                        <ListItem
                            href="/poc/client/profile/business-profile/cancel-account/business-account"
                            title="Encerrar a conta do meu estabelecimento"
                            icon={BuildingStorefrontIcon}
                            seeDetailsIcon={true}
                        />
                    </ul>
                </section>
            </main>
        </>
    );
}
