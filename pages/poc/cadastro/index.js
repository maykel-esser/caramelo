import Link from "next/link";
import Image from "next/image";

// Images
import SignUpUser from "/public/images/signup/signup-user.png";
import SignUpBusiness from "/public/images/signup/signup-business.png";

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-screen p-10">
            <div className="w-full max-w-md text-center">
                <Link
                    href="/poc/cadastro/cliente"
                    className="no-underline border-2 border-gray-100 block rounded-lg p-8 hover:bg-gray-100 mb-5"
                >
                    <Image
                        src={SignUpBusiness}
                        alt="Sou uma empresa"
                        className="mb-5"
                    />
                    <div>
                        <h2 className="font-bold mb-4">Para minha empresa</h2>
                        <p className="text-sm">
                            Indicado para: Petshops, Beleza (Barbearia,
                            Manicures, Salões), Alimentação (Hamburguerias,
                            Pizzarias, Cafés, etc.) e muito mais!
                        </p>
                    </div>
                </Link>
                <Link
                    href="/poc/cadastro/consumidor"
                    className="no-underline border-2 border-gray-100 block rounded-lg p-8 hover:bg-gray-100"
                >
                    <Image
                        src={SignUpUser}
                        alt="Sou um usuário"
                        className="mb-5"
                    />
                    <div>
                        <h2 className="font-bold mb-4">Usar pra mim</h2>
                        <p className="text-sm">
                            Reúna em um só lugar seus créditos de fidelidade.
                            Aproveite a busca no app e procure por lugares que
                            aceitam nosso app Caramelo®.
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
