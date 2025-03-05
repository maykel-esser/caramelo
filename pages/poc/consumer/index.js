import Link from "next/link";
import Header from "components/pages/poc/header";
import NavigationMenu from "components/pages/poc/navigation";
import { Avatar, Badge, TextInput } from "@mantine/core";

// Icons
import { MapPinIcon, MagnifyingGlassIcon, ScissorsIcon } from "@heroicons/react/24/outline";
import { PiGuitar, PiPizza, PiPawPrint } from "react-icons/pi";

export default function Page() {
    return (
        <>
            <NavigationMenu source="consumer" />
            <main className="px-4 pb-32">
                <Header source="consumer" />
                <section>
                    <h1 className="text-2xl font-bold mb-4">Olá Maykel</h1>
                    <form>
                        <TextInput
                            leftSection={
                                <MagnifyingGlassIcon className="w-5" />
                            }
                            placeholder="Pesquise por pizzarias, barbearias, etc."
                            required
                            className="mb-8"
                        />
                    </form>
                    <div>
                        <h2 className="text-lg font-bold mb-4">Mais buscados</h2>
                        <div className="grid grid-cols-4 gap-4 mb-8">
                            <div className="rounded-md p-4 text-center min-h-20 flex justify-center items-center border-yellow-400 border-2">
                                <Link href="/poc/consumer/explore">
                                    <ScissorsIcon className="w-8 h-8 m-auto mb-2 text-slate-700" />
                                    <p className="text-xs leading-3">Barbearias</p>
                                </Link>
                            </div>
                            <div className="rounded-md p-4 text-center min-h-20 flex justify-center items-center border-yellow-400 border-2">
                                <Link href="/poc/consumer/explore">
                                    <PiPizza className="w-8 h-8 m-auto mb-2 text-slate-700" />
                                    <p className="text-xs leading-3">Alimentação</p>
                                </Link>
                            </div>
                            <div className="rounded-md p-4 text-center min-h-20 flex justify-center items-center border-yellow-400 border-2">
                                <Link href="/poc/consumer/explore">
                                    <PiPawPrint className="w-8 h-8 m-auto mb-2 text-slate-700" />
                                    <p className="text-xs leading-3">Petshops</p>
                                </Link>
                            </div>
                            <div className="rounded-md p-4 text-center min-h-20 flex justify-center items-center border-yellow-400 border-2">
                                <Link href="/poc/consumer/explore">
                                    <PiGuitar className="w-8 h-8 m-auto mb-2 text-slate-700" />
                                    <p className="text-xs leading-3">Estúdios musicais</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h2 className="text-lg font-bold mb-4">Pra você</h2>
                    <section className="mb-8 bg-white p-4 rounded-xl">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h2 className="font-bold">Quase lá</h2>
                                <p className="text-sm">
                                    Falta pouco pra fechar estes!
                                </p>
                            </div>
                            <Link
                                href="/poc/consumer/cards"
                                className="text-xs underline font-bold"
                            >
                                Meus cartões
                            </Link>
                        </div>
                        <Link href="/poc/consumer/cards/details">
                            <div className="flex gap-4 items-center mb-4 pb-4 border-b">
                                <Avatar
                                    key="Wiegand Barber Shop"
                                    name="Wiegand Barber Shop"
                                    color="initials"
                                    size="md"
                                />
                                <div>
                                    <p className="text-xs font-bold">
                                        Wiegand Barber Shop
                                    </p>
                                    <p className="text-xs">
                                        A cada 10 cortes, ganhe um
                                    </p>
                                </div>
                                <div className="text-center ml-auto">
                                    <p className="text-xs">Faltam</p>
                                    <p className="text-lg font-bold">6</p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/poc/consumer/cards/details">
                            <div className="flex gap-4 items-center">
                                <Avatar
                                    key="Luke Petshop"
                                    name="Luke Petshop"
                                    color="initials"
                                    size="md"
                                />
                                <div>
                                    <p className="text-xs font-bold">
                                        Luke Petshop
                                    </p>
                                    <p className="text-xs">
                                        A cada 10 banhos, ganhe um
                                    </p>
                                </div>
                                <div className="text-center ml-auto">
                                    <p className="text-xs">Faltam</p>
                                    <p className="text-lg font-bold">3</p>
                                </div>
                            </div>
                        </Link>
                    </section>
                    <section className="mb-8 bg-white p-4 rounded-xl">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h2 className="font-bold">Lugares próximos</h2>
                                <p className="text-sm">
                                    Estes aqui aceitam Caramelo®
                                </p>
                            </div>
                            <Link
                                href="/poc/consumer/explore"
                                className="text-xs underline font-bold"
                            >
                                Explorar
                            </Link>
                        </div>
                        <Link href="/poc/consumer/explore/details">
                            <div className="flex gap-4 items-center mb-4 pb-4 border-b">
                                <Avatar
                                    key="Luke Petshop"
                                    name="Luke Petshop"
                                    color="initials"
                                    size="md"
                                />
                                <div>
                                    <Badge size="xs" className="mb-2">
                                        Petshop
                                    </Badge>
                                    <p className="text-xs font-bold">
                                        Luke Petshop
                                    </p>
                                    <p className="text-xs">
                                        Estrada Guilherme Weigert 2245 - Santa
                                        Cândida
                                    </p>
                                </div>
                                <div className="text-center ml-auto flex gap-2 items-center">
                                    <MapPinIcon className="w-5 text-yellow-400" />
                                    <p className="text-lg font-bold">3,5km</p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/poc/consumer/explore/details">
                            <div className="flex gap-4 items-center mb-4 pb-4 border-b">
                                <Avatar
                                    key="Grano Vivo"
                                    name="Grano Vivo"
                                    color="initials"
                                    size="md"
                                />
                                <div>
                                    <Badge size="xs" className="mb-2">
                                        Alimentação
                                    </Badge>
                                    <p className="text-xs font-bold">Grano Vivo</p>
                                    <p className="text-xs">
                                        Av. Paraná 3301 - Bacacheri
                                    </p>
                                </div>
                                <div className="text-center ml-auto flex gap-2 items-center">
                                    <MapPinIcon className="w-5 text-yellow-400" />
                                    <p className="text-lg font-bold">4,5km</p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/poc/consumer/explore/details">
                            <div className="flex gap-4 items-center">
                                <Avatar
                                    key="Wiegand Barber Shop"
                                    name="Wiegand Barber Shop"
                                    color="initials"
                                    size="md"
                                />
                                <div>
                                    <Badge size="xs" className="mb-2">
                                        Barbearia
                                    </Badge>
                                    <p className="text-xs font-bold">
                                        Wiegand Barber Shop
                                    </p>
                                    <p className="text-xs">
                                        Av. Anita Garibaldi, 1928 - Barreirinha
                                    </p>
                                </div>
                                <div className="text-center ml-auto flex gap-2 items-center">
                                    <MapPinIcon className="w-5 text-yellow-400" />
                                    <p className="text-lg font-bold">2,5km</p>
                                </div>
                            </div>
                        </Link>
                    </section>
                </section>
            </main>
        </>
    );
}
