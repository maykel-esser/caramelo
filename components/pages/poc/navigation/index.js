import NavigationMenuItem from "./item";

// Consts
import { USER_ROLES } from "constants/roles.constants";

// Icons
import {
    ChartBarSquareIcon,
    TicketIcon,
    SquaresPlusIcon,
    UsersIcon as UsersOutlineIcon,
    BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

export default function NavigationMenu(props) {
    if (props.source === USER_ROLES.CLIENT) {
        return (
            <nav className="fixed bottom-0 bg-white w-full px-4 pb-8 pt-6 z-50 shadow-[0_-10px_10px_rgba(0,0,0,0.01)]">
                <ul className="flex justify-around items-center">
                    <NavigationMenuItem
                        href="/poc/client"
                        icon={ChartBarSquareIcon}
                        label="Início"
                    />
                    <NavigationMenuItem
                        href="/poc/client/cards"
                        icon={TicketIcon}
                        label="Cartões"
                    />
                    <NavigationMenuItem
                        href="/poc/client/release"
                        icon={SquaresPlusIcon}
                        label="Liberar"
                    />
                    <NavigationMenuItem
                        href="/poc/client/clients"
                        icon={UsersOutlineIcon}
                        label="Clientes"
                    />
                    <NavigationMenuItem
                        href="/poc/client/profile"
                        icon={BuildingStorefrontIcon}
                        label="Perfil"
                    />
                </ul>
            </nav>
        );
    }
}
