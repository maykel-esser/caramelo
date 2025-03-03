import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import { Badge, Button } from "@mantine/core";
import Link from "next/link";

// Icons
import {
    MapPinIcon,
    BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

export default function Page() {
    return (
        <>
            <NavigationMenu source="consumer" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Wiegand Barber Shop"
                    backToPreviousPage={true}
                />
                <section>
                    <div className="flex gap-2 mb-4">
                        <Badge
                            radius="sm"
                            color="black"
                            size="lg"
                            leftSection={<MapPinIcon className="w-4" />}
                        >
                            Aprox. 3km
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
                    <div className="mb-4">
                        <p className="font-bold text-sm mb-2">Endereço</p>
                        <p>Av. Anita Garibaldi, 1928 - Barreirinha</p>
                    </div>
                    <Button
                        variant="outline"
                        fullWidth
                        leftSection={<MapPinIcon className="w-6" />}
                        component={Link}
                        href="geo:-25.368932579233803,-49.26365500930971?q=Av. Anita Garibaldi, 1928 - Barreirinha"
                        target="_blank"
                    >
                        Ver no mapa
                    </Button>
                </section>
            </main>
        </>
    );
}
