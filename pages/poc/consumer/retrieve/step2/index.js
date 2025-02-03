import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import CardList from "components/pages/poc/cards/cardList";

export default function Page() {

    return (
        <>
            <NavigationMenu source="consumer" />
            <main className="px-4 pb-32">
                <ActionHeader title="Resgatar crédito" backToPreviousPage={true} />
                <section>
                    <h2 className="text-center mb-8">Qual cartão você deseja solicitar?</h2>
                    <CardList
                        title="A cada 10 serviços, ganhe um corte"
                        href="/poc/consumer/retrieve/success"
                    />
                    <CardList
                        title="A cada 10 cervejas, ganhe uma"
                        href="/poc/consumer/retrieve/success"
                    />
                </section>
            </main>
        </>
    );
}
