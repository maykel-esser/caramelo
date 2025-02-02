import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import ClientCardList from "components/pages/poc/cards/clientCardList";

// Consts
import { RESOURCE_STATUS } from "constants/status.constants";

export default function Page() {
    return (
        <>
            <NavigationMenu source="consumer" />
            <main className="px-4 pb-32">
                <ActionHeader title="Cartões" backToPreviousPage={true} />
                <section>
                    <ClientCardList
                        client="Wiegand Barber Shop"
                        status={RESOURCE_STATUS.ACTIVE}
                        category="Barbearia"
                        address="Av. Anita Garibaldi, 1928 - Barreirinha"
                    />
                    <ClientCardList
                        client="Grano Vivo"
                        status={RESOURCE_STATUS.ACTIVE}
                        category="Pizzaria"
                        address="Av. Paraná 3301 - Bacacheri"
                    />
                </section>
            </main>
        </>
    );
}
