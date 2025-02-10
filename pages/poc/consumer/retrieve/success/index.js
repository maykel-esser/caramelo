import Image from "next/image";

import NavigationMenu from "components/pages/poc/navigation";
import ActionHeader from "components/pages/poc/header/actionHeader";

// Images
import SuccessImage from "public/images/retrieve-credit/success-retrieve-credit.png";

export default function Page() {
    return (
        <>
            <NavigationMenu source="consumer" />
            <main className="px-4 pb-32">
                <ActionHeader title="Resgatar crédito" />
                <section>
                    <h1 className="text-2xl font-bold mb-5 text-center">
                        Tudo pronto!
                    </h1>
                    <div className="mb-14 flex justify-center px-12">
                        <Image src={SuccessImage} alt="Obrigado" />
                    </div>
                    <p className="text-center">
                        Seu crédito foi solicitado! Assim que o estabelecimento
                        confirmar, você receberá uma mensagem, e você pode
                        conferir seus cartões a qualquer momento.
                    </p>
                </section>
            </main>
        </>
    );
}
