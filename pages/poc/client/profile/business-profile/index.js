import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import ListItem from "components/pages/poc/list/item";
import { Avatar } from "@mantine/core";

// Icons
import {
    BuildingStorefrontIcon,
    MapIcon,
    UserGroupIcon,
    XMarkIcon,
    SparklesIcon,
} from "@heroicons/react/24/outline";

export default function Page() {
    return (
        <>
            <NavigationMenu source="client" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Editar estabelecimento"
                    backToPreviousPage={true}
                />
                <section>
                    <div className="flex flex-col items-center justify-center text-center font-bold mb-4">
                        <div className="mb-4">
                            <Avatar
                                name="Barbearia Wiegand"
                                size="xl"
                                color="initials"
                            />
                        </div>
                        <p>Barbearia Wiegand</p>
                        <p className="p-2 bg-gray-300 text-white text-xs rounded-xl">
                            Plano Beta Testers Pro
                        </p>
                    </div>
                    <ul>
                        <ListItem
                            href="/poc/client/profile/business-profile/update-profile"
                            title="Dados cadastrais"
                            icon={BuildingStorefrontIcon}
                            seeDetailsIcon={true}
                        />
                        <ListItem
                            href="/poc/client/profile/business-profile/update-address"
                            title="Alterar endereço"
                            icon={MapIcon}
                            seeDetailsIcon={true}
                        />
                        <ListItem
                            href="/poc/client/profile/business-profile/users"
                            title="Usuários"
                            icon={UserGroupIcon}
                            seeDetailsIcon={true}
                        />
                        <ListItem
                            href="/poc/client/profile/business-profile/update-plan"
                            title="Alterar plano"
                            icon={SparklesIcon}
                            seeDetailsIcon={true}
                        />
                        <ListItem
                            href="/poc/client/profile/business-profile/cancel-account"
                            title="Encerrar conta"
                            icon={XMarkIcon}
                            seeDetailsIcon={true}
                            className="text-red-500"
                        />
                    </ul>
                </section>
            </main>
        </>
    );
}
