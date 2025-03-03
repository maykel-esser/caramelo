import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import ClientUserCard from "components/pages/poc/credits/clientUserCard";
import { Avatar, Badge } from "@mantine/core";

// Icons
import {
    MapPinIcon,
    BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

export default function Page() {
    const dummyUserCardData = [
        {
            title: "A cada 10 serviços, ganhe um corte",
            credit_needed: 10,
            credits: [
                {
                    datetime: "2024-12-30T13:53:05.535Z",
                },
                {
                    datetime: "2024-12-30T13:53:05.535Z",
                },
                {
                    datetime: "2024-12-30T13:53:05.535Z",
                },
            ],
        },
        {
            title: "A cada 8 cervejas, ganhe uma",
            credit_needed: 8,
            credits: [
                {
                    datetime: "2024-12-30T13:53:05.535Z",
                },
                {
                    datetime: "2024-12-30T13:53:05.535Z",
                },
                {
                    datetime: "2024-12-30T13:53:05.535Z",
                },
                {
                    datetime: "2024-12-30T13:53:05.535Z",
                },
                {
                    datetime: "2024-12-30T13:53:05.535Z",
                },
                {
                    datetime: "2024-12-30T13:53:05.535Z",
                },
                {
                    datetime: "2024-12-30T13:53:05.535Z",
                },
                {
                    datetime: "2024-12-30T13:53:05.535Z",
                },
                {
                    datetime: "2024-12-30T13:53:05.535Z",
                },
                {
                    datetime: "2024-12-30T13:53:05.535Z",
                },
                {
                    datetime: "2024-12-30T13:53:05.535Z",
                },
                {
                    datetime: "2024-12-30T13:53:05.535Z",
                },
            ],
        },
    ];

    return (
        <>
            <NavigationMenu source="consumer" />
            <main className="px-4 pb-32">
                <ActionHeader title="Cartões" backToPreviousPage={true} />
                <section>
                    <div className="flex gap-4">
                        <Avatar
                            key="Wiegand Barber Shop"
                            name="Wiegand Barber Shop"
                            color="initials"
                            size="lg"
                        />
                        <div>
                            <h2 className="text-lg font-bold">
                                Wiegand Barber Shop
                            </h2>
                            <p className="mb-2">
                                Av. Anita Garibaldi, 1928 - Barreirinha
                            </p>
                            <div className="flex gap-2 items-center mb-8 pb-8 border-b">
                                <Badge
                                    radius="sm"
                                    size="lg"
                                    leftSection={
                                        <BuildingStorefrontIcon className="w-4" />
                                    }
                                >
                                    Barbearia
                                </Badge>
                                <Badge
                                    radius="sm"
                                    size="lg"
                                    leftSection={<MapPinIcon className="w-4" />}
                                >
                                    3.5km
                                </Badge>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ClientUserCard data={dummyUserCardData[0]} />
                        <ClientUserCard data={dummyUserCardData[1]} />
                    </div>
                </section>
            </main>
        </>
    );
}
