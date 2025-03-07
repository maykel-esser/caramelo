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
    LockClosedIcon,
    UserIcon,
    ShieldCheckIcon,
    ArchiveBoxXMarkIcon,
} from "@heroicons/react/24/outline";

export default function Page() {
    return (
        <>
            <NavigationMenu source="consumer" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Meu Perfil"
                    backToPreviousPage={true}
                    action="notification"
                    actionHref="/poc/consumer/profile/notification"
                />
                <section>
                    <div className="flex flex-col items-center justify-center text-center font-bold mb-4">
                        <div className="relative mb-4">
                            <Avatar
                                name="Maykel Esser"
                                size="xl"
                                color="initials"
                            />
                            <div className="absolute bottom-4 right-3 bg-gray-100 text-gray-600 shadow-md rounded-full p-2 transform translate-x-1/2 translate-y-1/2">
                                <Link href="/poc/consumer/profile/personal-data">
                                    <PencilIcon className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                        <p className="">Maykel Esser</p>
                    </div>
                    <ul>
                        <ListItem
                            href="/poc/consumer/profile/personal-data"
                            title="Dados pessoais"
                            icon={UserIcon}
                            seeDetailsIcon={true}
                        />
                        <ListItem
                            href="/poc/consumer/profile/change-password"
                            title="Alterar senha"
                            icon={LockClosedIcon}
                            seeDetailsIcon={true}
                        />
                        <ListItem
                            href="/poc/consumer/profile/privacy"
                            title="Privacidade"
                            icon={ShieldCheckIcon}
                            seeDetailsIcon={true}
                        />
                        <ListItem
                            href="/poc/consumer/profile/help"
                            title="Ajuda"
                            icon={QuestionMarkCircleIcon}
                            seeDetailsIcon={true}
                        />
                        <ListItem
                            href="/poc/consumer/profile/cancel-account"
                            title="Cancelar minha conta"
                            icon={ArchiveBoxXMarkIcon}
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
