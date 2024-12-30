import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import CardList from "components/pages/poc/cards/cardList";

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
                    <p className="text-gray-500 mb-8 text-center">
                        Os cartões são onde seus clientes guardarão os créditos
                        de acordo com suas promoções. Você pode ter múltiplos
                        cartões.
                    </p>
                    <CardList
                        title="A cada 10 serviços, ganhe um corte"
                        expiresIn="12 meses"
                        creditsGiven="48"
                        clientsUsing="23"
                    />
                </section>
            </main>
        </>
    );
}
