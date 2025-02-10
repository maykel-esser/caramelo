import Link from "next/link";
import Header from "components/pages/poc/header";
import NavigationMenu from "components/pages/poc/navigation";
import DashboardGraphCard from "components/pages/poc/cards/dashboardGraphCard";
import { Avatar } from "@mantine/core";

// Icons
import {
    HeartIcon,
    GiftIcon,
    UsersIcon as UsersIconSolid,
    ChevronRightIcon,
} from "@heroicons/react/24/solid";

export default function Page() {
    // Dummy Data for LineChart
    let dummyChartData = {
        dataKey: "date",
        data: [
            { date: "25 Nov", count: 10 },
            { date: "18 Nov", count: 5 },
            { date: "11 Nov", count: 15 },
            { date: "2 Dez", count: 25 },
        ],
    };

    return (
        <>
            <NavigationMenu source="client" />
            <main className="px-4 pb-32">
                <Header source="client" />
                <section className="mb-8 bg-white p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="font-bold">Últimos clientes</h2>
                        <Link
                            href="/poc/client/clients"
                            className="text-xs underline font-bold"
                        >
                            <ChevronRightIcon className="w-6" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                        <div className="text-center">
                            <div className="flex justify-center mb-2">
                                <Avatar
                                    key="Lucas Wiegand"
                                    name="Lucas Wiegand"
                                    color="initials"
                                    size="lg"
                                />
                            </div>
                            <p className="text-xs">Lucas Wiegand</p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-2">
                                <Avatar
                                    key="Maykel Esser"
                                    name="Maykel Esser"
                                    color="initials"
                                    size="lg"
                                />
                            </div>
                            <p className="text-xs">Maykel Esser</p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-2">
                                <Avatar
                                    key="Luana de Souza Ebbinghaus"
                                    name="Luana de Souza Ebbinghaus"
                                    color="initials"
                                    size="lg"
                                />
                            </div>
                            <p className="text-xs">Luana de Souza Ebbinghaus</p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-2">
                                <Avatar
                                    key="Angela Souza"
                                    name="Angela Souza"
                                    color="initials"
                                    size="lg"
                                />
                            </div>
                            <p className="text-xs">Angela Souza</p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-2">
                                <Avatar
                                    key="Bruno Taruja"
                                    name="Bruno Taruja"
                                    color="initials"
                                    size="lg"
                                />
                            </div>
                            <p className="text-xs">Bruno Taruja</p>
                        </div>
                    </div>
                </section>
                <DashboardGraphCard
                    icon={UsersIconSolid}
                    title="Novos clientes recentes"
                    description="13 cadastros nas últimas 4 semanas"
                    label="Clientes cadastrados"
                    data={dummyChartData}
                />
                <DashboardGraphCard
                    icon={HeartIcon}
                    title="Créditos liberados recentes"
                    description="49 créditos nas últimas 4 semanas"
                    label="Créditos liberados"
                    data={dummyChartData}
                />
                <DashboardGraphCard
                    icon={GiftIcon}
                    title="Resgates liberados recentes"
                    description="49 resgates nas últimas 4 semanas"
                    label="Resgates liberados"
                    data={dummyChartData}
                />
            </main>
        </>
    );
}
