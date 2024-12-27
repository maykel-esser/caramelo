import Link from "next/link";
import dynamic from "next/dynamic";
import { Avatar } from "@mantine/core";
import { LineChart } from "@mantine/charts";
import { NavigationCliente } from "components/poc/navigation";

// Dynamic imports (lottie need to run at client-side only)
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

// Icons
import {
    HeartIcon,
    GiftIcon,
    UsersIcon as UsersIconSolid,
    PlusCircleIcon,
} from "@heroicons/react/24/solid";

// Images
import LogoAnimated from "/public/images/logos/logo-caramelo-lottie.json";

export default function Page() {
    const logoOptions = {
        autoplay: true,
        loop: false,
        animationData: LogoAnimated,
    };

    // Dummy Data for LineChart
    let dummyChartData = [
        { date: "25 Nov", count: 10 },
        { date: "18 Nov", count: 5 },
        { date: "11 Nov", count: 15 },
        { date: "2 Dez", count: 25 },
    ];

    return (
        <>
            <NavigationCliente />
            <main className="px-4 pb-32">
                <header className="flex justify-between pt-16 mb-8">
                    <div>
                        <Lottie options={logoOptions} height={55} width={55} />
                    </div>
                    <div className="relative">
                        <Avatar
                            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                            alt="it's me"
                            size="md"
                        />
                        <span className="absolute inset-0 object-right-top -mr-6 bg-red-500 text-center text-white w-3 h-3 rounded-full"></span>
                    </div>
                </header>
                <section className="mb-8 bg-slate-50 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="font-bold">Últimos clientes</h2>
                        <Link
                            href="/poc/cliente/clientes"
                            className="text-xs underline font-bold"
                        >
                            <PlusCircleIcon className="w-8" />
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
                <section className="mb-8 bg-slate-50 p-4 rounded-xl">
                    <div className="flex items-center gap-3 mb-6">
                        <UsersIconSolid className="rounded-full border w-10 p-2 bg-black text-white" />
                        <div>
                            <h2 className="font-bold">
                                Novos clientes recentes
                            </h2>
                            <p className="text-sm">
                                13 cadastros nas últimas 4 semanas
                            </p>
                        </div>
                    </div>
                    <div className="-ml-6">
                        <LineChart
                            h={150}
                            data={dummyChartData}
                            series={[
                                { name: "count", label: "Novos clientes" },
                            ]}
                            dataKey="date"
                            type="gradient"
                            gradientStops={[
                                { offset: 0, color: "lime.5" },
                                { offset: 20, color: "cyan.5" },
                                { offset: 50, color: "yellow.5" },
                                { offset: 70, color: "orange.6" },
                                { offset: 100, color: "red.6" },
                            ]}
                            strokeWidth={3}
                            curveType="natural"
                        />
                    </div>
                </section>
                <section className="mb-8 bg-slate-50 p-4 rounded-xl">
                    <div className="flex items-center gap-3 mb-6">
                        <HeartIcon className="rounded-full border w-10 p-2 bg-black text-white" />
                        <div>
                            <h2 className="font-bold">
                                Créditos liberados recentes
                            </h2>
                            <p className="text-sm">
                                49 créditos nas últimas 4 semanas
                            </p>
                        </div>
                    </div>
                    <div className="-ml-6">
                        <LineChart
                            h={150}
                            data={dummyChartData}
                            series={[
                                { name: "count", label: "Créditos liberados" },
                            ]}
                            dataKey="date"
                            type="gradient"
                            gradientStops={[
                                { offset: 0, color: "lime.5" },
                                { offset: 20, color: "cyan.5" },
                                { offset: 50, color: "yellow.5" },
                                { offset: 70, color: "orange.6" },
                                { offset: 100, color: "red.6" },
                            ]}
                            strokeWidth={3}
                            curveType="natural"
                        />
                    </div>
                </section>
                <section className="mb-8 bg-slate-50 p-4 rounded-xl">
                    <div className="flex items-center gap-3 mb-6">
                        <GiftIcon className="rounded-full border w-10 p-2 bg-black text-white" />
                        <div>
                            <h2 className="font-bold">
                                Resgates liberados recentes
                            </h2>
                            <p className="text-sm">
                                49 resgates nas últimas 4 semanas
                            </p>
                        </div>
                    </div>
                    <div className="-ml-6">
                        <LineChart
                            h={150}
                            data={dummyChartData}
                            series={[
                                { name: "count", label: "Resgates liberados" },
                            ]}
                            dataKey="date"
                            type="gradient"
                            gradientStops={[
                                { offset: 0, color: "lime.5" },
                                { offset: 20, color: "cyan.5" },
                                { offset: 50, color: "yellow.5" },
                                { offset: 70, color: "orange.6" },
                                { offset: 100, color: "red.6" },
                            ]}
                            strokeWidth={3}
                            curveType="natural"
                        />
                    </div>
                </section>
            </main>
        </>
    );
}
