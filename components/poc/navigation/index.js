import Link from "next/link";

// Icons
import {
    ChartBarSquareIcon,
    TicketIcon,
    SquaresPlusIcon,
    UsersIcon as UsersOutlineIcon,
    BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

function NavigationCliente() {
    return (
        <nav className="fixed bottom-0 bg-white w-full px-4 pb-8 pt-6 border-t z-50">
            <ul className="flex justify-around items-center">
                <li className="flex flex-col items-center text-xs">
                    <Link
                        href="/poc/cliente"
                        className="flex flex-col items-center"
                    >
                        <ChartBarSquareIcon className="w-8" />
                        <span>Início</span>
                    </Link>
                </li>
                <li className="flex flex-col items-center text-xs">
                    <Link
                        href="/poc/cliente/cartoes"
                        className="flex flex-col items-center"
                    >
                        <TicketIcon className="w-8" />
                        <span>Cartões</span>
                    </Link>
                </li>
                <li className="flex flex-col items-center text-xs">
                    <Link
                        href="/poc/cliente/liberar"
                        className="flex flex-col items-center"
                    >
                        <SquaresPlusIcon className="w-8" />
                        <span>Liberar</span>
                    </Link>
                </li>
                <li className="flex flex-col items-center text-xs">
                    <Link
                        href="/poc/cliente/clientes"
                        className="flex flex-col items-center"
                    >
                        <UsersOutlineIcon className="w-8" />
                        <span>Clientes</span>
                    </Link>
                </li>
                <li className="flex flex-col items-center text-xs">
                    <Link
                        href="/poc/cliente/perfil"
                        className="flex flex-col items-center"
                    >
                        <BuildingStorefrontIcon className="w-8" />
                        <span>Perfil</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export { NavigationCliente };
