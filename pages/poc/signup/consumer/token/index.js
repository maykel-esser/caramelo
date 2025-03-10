import Link from "next/link";
import { Button, PinInput } from "@mantine/core";

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-screen p-8">
            <div className="w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-5">
                    Dá uma conferida no seu SMS
                </h1>
                <p className="mb-8">
                    Enviamos para seu telefone um código para autenticar sua
                    conta. Verifique seu SMS e digite o código abaixo para
                    validar. Isso é para usa segurança!
                </p>
                <form className="text-left">
                    <div className="mb-8 flex justify-center">
                        <PinInput
                            required
                            size="md"
                            radius="md"
                            oneTimeCode
                            inputMode="numeric"
                            length={5}
                        />
                    </div>
                    <Button
                        type="submit"
                        component={Link}
                        href="/poc/signup/consumer/success"
                    >
                        Validar
                    </Button>
                </form>
            </div>
        </div>
    );
}
