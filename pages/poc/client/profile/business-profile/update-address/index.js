import Link from "next/link";
import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { Button, TextInput, LoadingOverlay } from "@mantine/core";

// Icons
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Page() {
    const [visible, setVisible] = useState(false);
    const form = useForm({
        initialValues: {
            cep: "",
            logradouro: "",
            numero: "",
            complemento: "",
            bairro: "",
            cidade: "",
            estado: "",
        },
        validate: {
            cep: (value) =>
                /^[0-9]{8}$/.test(value)
                    ? null
                    : "CEP inválido. Deve conter 8 caracteres numéricos.",
        },
    });

    const handleCEPLookup = async () => {
        const { cep } = form.values;

        if (!/^[0-9]{8}$/.test(cep)) {
            form.setFieldError(
                "cep",
                "CEP inválido. Deve conter 8 caracteres numéricos.",
            );
            return;
        }

        setVisible(true);

        try {
            const response = await fetch(`/api/v1/utils/cep?cep=${cep}`);
            const body = await response.json();

            if (response.ok) {
                form.setValues({
                    logradouro: body.data.street,
                    bairro: body.data.neighborhood,
                    cidade: body.data.city,
                    estado: body.data.state,
                });
                form.clearFieldError("cep");
            } else {
                form.setFieldError(
                    "cep",
                    "Erro inesperado ao buscar o CEP. Tente novamente mais tarde.",
                );
            }
        } catch (error) {
            console.log(error);
            form.setFieldError(
                "cep",
                "Erro inesperado ao buscar o CEP. Tente novamente mais tarde.",
            );
        } finally {
            setVisible(false);
        }
    };

    return (
        <>
            <LoadingOverlay
                visible={visible}
                zIndex={1000}
                overlayProps={{ radius: "sm", blur: 2 }}
            />
            <NavigationMenu source="client" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Editar endereço"
                    backToPreviousPage={true}
                />
                <section>
                    <form>
                        <div className="mb-4">
                            <TextInput
                                label="CEP"
                                placeholder="Digite seu CEP"
                                description="Coloque seu CEP. Vamos tentar buscar seu endereço automaticamente."
                                required
                                rightSection={
                                    <MagnifyingGlassIcon
                                        onClick={handleCEPLookup}
                                        style={{ cursor: "pointer" }}
                                        className="h-5 w-5 text-gray-500 hover:bg-gray-100 p-0.5 rounded-md"
                                    />
                                }
                                {...form.getInputProps("cep")}
                            />
                        </div>
                        <div className="mb-4">
                            <TextInput
                                label="Logradouro"
                                placeholder="Rua, Avenida, etc."
                                required
                                disabled={!form.values.logradouro}
                                {...form.getInputProps("logradouro")}
                            />
                        </div>
                        <div className="mb-4">
                            <TextInput
                                label="Número"
                                placeholder="Número"
                                required
                                {...form.getInputProps("numero")}
                            />
                        </div>
                        <div className="mb-4">
                            <TextInput
                                label="Complemento"
                                placeholder="Complemento"
                                {...form.getInputProps("complemento")}
                            />
                        </div>
                        <div className="mb-4">
                            <TextInput
                                label="Bairro"
                                placeholder="Bairro"
                                required
                                disabled={!form.values.bairro}
                                {...form.getInputProps("bairro")}
                            />
                        </div>
                        <div className="mb-4">
                            <TextInput
                                label="Cidade"
                                placeholder="Cidade"
                                required
                                disabled={!form.values.cidade}
                                {...form.getInputProps("cidade")}
                            />
                        </div>
                        <div className="mb-4">
                            <TextInput
                                label="Estado"
                                placeholder="Estado"
                                required
                                disabled={!form.values.estado}
                                {...form.getInputProps("estado")}
                            />
                        </div>
                        <Button
                            type="submit"
                            component={Link}
                            href="/poc/client/profile/business-profile"
                        >
                            Atualizar dados
                        </Button>
                    </form>
                </section>
            </main>
        </>
    );
}
