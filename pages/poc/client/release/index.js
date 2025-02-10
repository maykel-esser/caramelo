import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import CreditList from "components/pages/poc/credits/creditList";

export default function Page() {
    return (
        <>
            <NavigationMenu source="client" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Liberar créditos"
                    backToPreviousPage={true}
                />
                <section>
                    <CreditList
                        name="Maykel Esser"
                        phone="41984012834"
                        title="A cada 10 serviços, ganhe um corte"
                        datetime={new Date()}
                    />
                    <CreditList
                        name="Salun Marvin"
                        phone="47992922092"
                        title="A cada 10 serviços, ganhe um corte"
                        datetime={new Date()}
                    />
                </section>
            </main>
        </>
    );
}
