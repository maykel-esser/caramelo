import Link from "next/link";
import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";

// Icons
import {
    ChevronRightIcon,
    UsersIcon,
    TicketIcon,
    ExclamationCircleIcon
} from "@heroicons/react/24/outline";

export default function Page() {
    return (
        <>
            <NavigationMenu source="client" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Cartões"
                    backToPreviousPage={true}
                    action="add"
                    actionHref="/poc/client/cards/add"
                />
                <section>
                    <div className="bg-white p-4 rounded-xl mb-8 flex items-center gap-4">
                        <TicketIcon className="w-20" />
                        <p className="text-gray-500 text-sm">Os cartões são onde seus clientes guardarão os créditos de acordo com suas promoções. Você pode ter múltiplos cartões.</p>
                    </div>
                    <div className="flex justify-between items-center mb-4 p-4 bg-white rounded-xl">
                        <div>
                            <h2 className="font-bold">
                                A cada 10 serviços, ganhe um corte
                            </h2>
                            <p className="text-sm mb-2 text-gray-500">
                                Expiram em 12 meses
                            </p>
                            <div className="flex divide-x divide-gray-200 gap-3">
                                <div className="flex gap-2">
                                    <TicketIcon className="w-4" />
                                    <p className="text-sm font-bold">
                                        48 créditos
                                    </p>
                                </div>
                                <div className="flex gap-2 pl-3">
                                    <UsersIcon className="w-4" />
                                    <p className="text-sm font-bold">
                                        23 clientes
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link href="/poc/client/cards/details">
                            <ChevronRightIcon className="w-6" />
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
