import Link from "next/link";
import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";

import { IMaskInput } from "react-imask";
import { Button, TextInput } from "@mantine/core";

// Icons
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function Page() {
    return (
        <>
            <NavigationMenu source="client" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Adicionar Usuário"
                    backToPreviousPage={true}
                />
                <section>
                    <div className="p-4 bg-white rounded-xl mb-8 flex gap-4 items-start">
                        <ExclamationCircleIcon className="w-36 flex-grow" />
                        <div className="text-sm">
                            <p>
                                Atenção: Não é necessário cadastrar uma senha.
                                Uma senha temporária será enviada por SMS no
                                telefone de cadastro.
                            </p>
                        </div>
                    </div>
                    <form>
                        <div className="mb-4">
                            <TextInput
                                label="Nome do usuário"
                                placeholder="Nome completo"
                                required
                            />
                        </div>
                        <div className="mb-8">
                            <TextInput
                                label="Telefone"
                                placeholder="Telefone (com DDD)"
                                required
                                component={IMaskInput}
                                mask="(00) 00000-0000"
                            />
                        </div>
                        <Button
                            component={Link}
                            href="/poc/client/profile/business-profile/users"
                        >
                            Cadastrar
                        </Button>
                    </form>
                </section>
            </main>
        </>
    );
}
