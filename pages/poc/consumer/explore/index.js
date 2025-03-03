import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import {
    Badge,
    Avatar,
    Drawer,
    MultiSelect,
    Slider,
    Button,
} from "@mantine/core";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";

// Icons
import {
    MapPinIcon,
    BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

export default function Page() {
    const [openedFilters, { open: openFilters, close: closeFilters }] =
        useDisclosure(false);

    return (
        <>
            <NavigationMenu source="consumer" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Explore lugares"
                    backToPreviousPage={true}
                    action="filter"
                    onActionClick={openFilters}
                />
                <section>
                    <div className="flex gap-2">
                        <Badge
                            radius="sm"
                            color="black"
                            size="lg"
                            leftSection={<MapPinIcon className="w-4" />}
                        >
                            Até 3km
                        </Badge>
                        <Badge
                            radius="sm"
                            color="black"
                            size="lg"
                            leftSection={
                                <BuildingStorefrontIcon className="w-4" />
                            }
                        >
                            Barbearias
                        </Badge>
                    </div>
                    <div className="mt-4">
                        <Link href="/poc/consumer/explore/details">
                            <div className="flex gap-4 items-center mb-4 p-4 bg-white rounded-xl">
                                <Avatar
                                    key="Luke Petshop"
                                    name="Luke Petshop"
                                    color="initials"
                                    size="md"
                                />
                                <div>
                                    <Badge
                                        color="black"
                                        size="xs"
                                        className="mb-2"
                                    >
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
                                    <MapPinIcon className="w-5 text-gray-400" />
                                    <p className="text-lg font-bold">3,5km</p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/poc/consumer/explore/details">
                            <div className="flex gap-4 items-center mb-4 p-4 bg-white rounded-xl">
                                <Avatar
                                    key="Wiegand Barber Shop"
                                    name="Wiegand Barber Shop"
                                    color="initials"
                                    size="md"
                                />
                                <div>
                                    <Badge
                                        color="black"
                                        size="xs"
                                        className="mb-2"
                                    >
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
                                    <MapPinIcon className="w-5 text-gray-400" />
                                    <p className="text-lg font-bold">2,5km</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            </main>
            <Drawer
                opened={openedFilters}
                size="350px"
                onClose={closeFilters}
                offset={8}
                position="bottom"
                radius="lg"
                overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
            >
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Editar filtros</h1>
                    <form>
                        <div className="mb-4">
                            <p className="font-bold mb-2">Categorias</p>
                            <MultiSelect
                                placeholder="Selecione uma categoria"
                                data={["Barbearia", "Petshop", "Restaurante"]}
                            />
                        </div>
                        <div className="mb-4">
                            <p className="font-bold mb-2">Distância</p>
                            <Slider
                                min={3}
                                max={12}
                                step={3}
                                defaultValue={[3, 12]}
                            />
                        </div>
                        <Button onClick={closeFilters}>Aplicar</Button>
                    </form>
                </div>
            </Drawer>
        </>
    );
}
