import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IMaskInput } from "react-imask";
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Divider,
    Switch,
} from "@mantine/core";

// Images
import Logo from "public/images/logos/logo-caramelo-vertical.png";

// Icons
import {
    PhoneIcon,
    BuildingStorefrontIcon,
    UserIcon,
} from "@heroicons/react/24/solid";

export default function Page() {
    // Switch de demonstração
    const [isUser, setIsUser] = useState(true);
    const switchUser = <UserIcon className="w-4" />;
    const switchCompany = <BuildingStorefrontIcon className="w-4" />;
    const handleSwitchChange = (checked) => {
        setIsUser(checked); // Update status according to the switch value
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-10">
            <div className="w-full max-w-md">
                <div className="mb-14 flex justify-center">
                    <Image src={Logo} alt="Caramelo®" width={200} />
                </div>
                <form>
                    <div className="mb-4">
                        <Switch
                            size="md"
                            color="dark.4"
                            onLabel={switchUser}
                            offLabel={switchCompany}
                            label="Demonstração cliente/consumidor"
                            checked={isUser}
                            onChange={(event) =>
                                handleSwitchChange(event.currentTarget.checked)
                            }
                        />
                    </div>
                    <div className="mb-4">
                        <TextInput
                            leftSection={<PhoneIcon className="w-5" />}
                            placeholder="Seu telefone"
                            required
                            component={IMaskInput}
                            mask="(00) 00000-0000"
                            size="md"
                            radius="md"
                            value="41984012834"
                        />
                    </div>
                    <div className="mb-4">
                        <PasswordInput
                            placeholder="Sua senha"
                            required
                            size="md"
                            radius="md"
                        />
                    </div>
                    <div className="flex items-center justify-between my-5">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <Checkbox
                                    defaultChecked
                                    label="Lembrar-me"
                                    size="md"
                                    color="black"
                                />
                            </div>
                        </div>
                        <Link
                            href="/poc/forgot-my-password"
                            className="underline"
                        >
                            Esqueci a senha
                        </Link>
                    </div>
                    <Button
                        variant="filled"
                        fullWidth
                        size="lg"
                        radius="md"
                        type="submit"
                        color="black"
                        component={Link}
                        href={isUser ? "/poc/consumer" : "/poc/client"}
                    >
                        Entrar
                    </Button>
                    <Divider label="ou" my="lg" />
                    <Button
                        component={Link}
                        href="/poc/signup"
                        variant="outline"
                        size="lg"
                        radius="md"
                        fullWidth
                        color="black"
                    >
                        Quero me cadastrar
                    </Button>
                </form>
            </div>
        </div>
    );
}
