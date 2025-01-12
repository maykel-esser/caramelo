import Link from "next/link";
import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import ListItem from "components/pages/poc/list/item";
import { Avatar } from "@mantine/core";

// Icons
import { PencilIcon } from "@heroicons/react/24/solid";
import {
    ArrowRightEndOnRectangleIcon,
    QuestionMarkCircleIcon,
    BuildingStorefrontIcon,
    LockClosedIcon,
    UserIcon,
    ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function Page() {
    return (
        <>
            <NavigationMenu source="client" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Meu Perfil"
                    backToPreviousPage={true}
                    action="notification"
                    actionHref="/poc/client/profile/notification"
                />
                <section>
                    <div className="flex flex-col items-center justify-center text-center font-bold mb-4">
                        <div className="relative mb-4">
                            <Avatar
                                src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                                alt="Maykel Esser"
                                size="xl"
                            />
                            <div className="absolute bottom-4 right-3 bg-gray-100 text-gray-600 shadow-md rounded-full p-2 transform translate-x-1/2 translate-y-1/2">
                                <Link href="/poc/client/profile/personal-data">
                                    <PencilIcon className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                        <p className="">Maykel Esser</p>
                    </div>
                    <ul>
                        <ListItem
                            href="/poc/client/profile/personal-data"
                            title="Dados pessoais"
                            icon={UserIcon}
                            seeDetailsIcon={true}
                        />
                        <ListItem
                            href="/poc/client/profile/change-password"
                            title="Alterar senha"
                            icon={LockClosedIcon}
                            seeDetailsIcon={true}
                        />
                        <ListItem
                            href="/poc/client/profile/business-profile"
                            title="Editar Estabelecimento"
                            icon={BuildingStorefrontIcon}
                            seeDetailsIcon={true}
                        />
                        <ListItem
                            href="/poc/client/profile/privacy"
                            title="Privacidade"
                            icon={ShieldCheckIcon}
                            seeDetailsIcon={true}
                        />
                        <ListItem
                            href="/poc/client/profile/help"
                            title="Ajuda"
                            icon={QuestionMarkCircleIcon}
                            seeDetailsIcon={true}
                        />
                        <ListItem
                            href="/poc"
                            title="Sair do app"
                            icon={ArrowRightEndOnRectangleIcon}
                            className="text-red-500"
                        />
                    </ul>
                </section>
            </main>
        </>
    );
}
