import Link from "next/link";
import { useState } from "react";
import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import { Button, Select, NumberInput, TextInput } from "@mantine/core";

// Icons
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function Page() {
    const [unit, setUnit] = useState("day");
    const [maxValue, setMaxValue] = useState(31);
    const [numberValue, setNumberValue] = useState(0);

    // Update max value based on unit
    const handleUnitChange = (value) => {
        setUnit(value);
        switch (value) {
            default:
            case "day":
                setMaxValue(31);
                break;
            case "month":
                setMaxValue(12);
                break;
            case "year":
                setMaxValue(5);
                break;
        }
        setNumberValue(0);
    };

    return (
        <>
            <NavigationMenu source="client" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Adicionar Cartão"
                    backToPreviousPage={true}
                />
                <section>
                    <form>
                        <div className="p-4 bg-white rounded-xl mb-8 flex gap-4 items-center">
                            <ExclamationCircleIcon className="w-36 flex-grow" />
                            <p className="text-sm">
                                Entenda Cartão como uma promoção que você quer
                                fazer: Se você quer dar um benefício para alguém
                                que frequenta/consumiu algo no seu
                                estabelecimento após 10 vezes, isso é um cartão.
                                Através dele, seus clientes podem armazenar
                                créditos nestes cartões.
                            </p>
                        </div>
                        <div className="mb-4">
                            <TextInput
                                label="Título da promoção"
                                description="Ex: A cada 10 serviços, ganhe um corte"
                                placeholder="Título"
                                required
                            />
                        </div>
                        <div className="flex gap-4 items-end mb-4">
                            <Select
                                label="Abrangência"
                                description="Escolha a abrangência"
                                required
                                size="md"
                                radius="md"
                                value={unit}
                                onChange={handleUnitChange}
                                data={[
                                    { value: "day", label: "Dia(s)" },
                                    { value: "month", label: "Mes(es)" },
                                    { value: "year", label: "Ano(s)" },
                                ]}
                            />
                            <NumberInput
                                label="Validade"
                                description="Escolha um número"
                                placeholder="0"
                                required
                                size="md"
                                radius="md"
                                min={1}
                                max={maxValue}
                                value={numberValue}
                                onChange={setNumberValue}
                            />
                        </div>
                        <div className="mb-4 grid grid-cols-2 gap-4">
                            <NumberInput
                                label="Créditos necessários"
                                description="Escolha um número"
                                placeholder="0"
                                required
                                size="md"
                                radius="md"
                                min={1}
                                max={maxValue}
                                value={numberValue}
                                onChange={setNumberValue}
                            />
                        </div>
                        <Button component={Link} href="/poc/client/cards">
                            Cadastrar
                        </Button>
                    </form>
                </section>
            </main>
        </>
    );
}
