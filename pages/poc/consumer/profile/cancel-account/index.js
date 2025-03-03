import Link from "next/link";
import Image from "next/image";
import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";
import { useDisclosure } from "@mantine/hooks";
import { Button, Drawer } from "@mantine/core";

// Images
import CancelAccountImage from "public/images/cancel-account/cancel-account.png";

export default function Page() {
    const [openedRemove, { open: openRemove, close: closeRemove }] =
        useDisclosure(false);

    return (
        <>
            <NavigationMenu source="consumer" />
            <main className="px-4 pb-32">
                <ActionHeader
                    title="Encerrar Conta pessoa"
                    backToPreviousPage={true}
                />
                <section className="text-center">
                    <div className="flex justify-center">
                        <Image
                            src={CancelAccountImage}
                            alt="Sentiremos sua falta!"
                            className="p-8"
                        />
                    </div>
                    <h1 className="text-2xl font-bold mb-4">
                        Sentiremos sua falta
                    </h1>
                    <p className="mb-4">
                        Uma pena que você está decidindo ir embora. Esteja
                        ciente que abrindo mão da sua conta você não terá mais
                        acesso a sua conta pessoal, nem de estabelecimento (caso
                        tenha).
                    </p>
                    <Button variant="outline" color="red" onClick={openRemove}>
                        Quero continuar
                    </Button>
                </section>
            </main>
            <Drawer
                opened={openedRemove}
                size="lg"
                onClose={closeRemove}
                offset={8}
                position="bottom"
                radius="lg"
                overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
            >
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">
                        Confirme sua ação
                    </h1>
                    <p className="font-bold mb-4">
                        Ao encerrar sua conta, você:
                    </p>
                    <ul className="list-disc list-inside mb-8">
                        <li>
                            Não poderá mais interagir com sua conta de usuário;
                        </li>
                        <li>
                            Perde acesso a todas as informações de sua conta,
                            incluindo registro de créditos;
                        </li>
                        <li>
                            Você não poderá completar o cancelamento caso você
                            seja o único usuário gestor de um estabelecimento;
                        </li>
                        <li>Nenhum reembolso será efetuado.</li>
                    </ul>
                    <p>Você deseja desativar seu usuário?</p>
                    <p>
                        <strong>
                            Esta ação não poderá ser desfeita. Contate nosso
                            suporte se necessário.
                        </strong>
                    </p>
                    <div className="mt-6">
                        <Button
                            color="red"
                            component={Link}
                            href="/poc/account-cancelled"
                        >
                            Desativar conta
                        </Button>
                    </div>
                </div>
            </Drawer>
        </>
    );
}
