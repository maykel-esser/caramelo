import Link from "next/link";
import { useState } from "react";
import { IMaskInput } from "react-imask";
import { TextInput, Button, PasswordInput, Progress, Popover } from "@mantine/core";
import { getStrength, PasswordRequirement, passwordRequirements } from "/utils/password-utils";

// Icons
import { PhoneIcon } from "@heroicons/react/24/outline";

export default function Page() {

    // State settings
    const [passwordValue, setPasswordValue] = useState("");
    const [popoverOpened, setPopoverOpened] = useState(false);

    // Password meter
    const requirements = passwordRequirements();
    const strength = getStrength(passwordValue);
    const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";

    const checks = requirements.map((requirement, index) => (
        <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(passwordValue)} />
    ));

    return (
        <div className="flex items-center justify-center min-h-screen p-10">
            <div className="w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-5">Eu quero usar para mim</h1>
                <p><strong>O cadastro é bem simples e rápido.</strong></p>
                <p className="mb-8">Ah, caso você já tenha um telefone cadastrado, você será redirecionado para recuperar sua senha e continuar usando sua conta criada anteriormente!</p>
                <form className="text-left">
                    <div className="mb-3">
                        <TextInput
                            placeholder="Seu nome"
                            required
                            size="md"
                            radius="md"
                        />
                    </div>
                    <div className="mb-3">
                        <TextInput
                            placeholder="Digite um telefone"
                            required
                            size="md"
                            radius="md"
                            component={IMaskInput} mask="(00) 00000-0000"
                            leftSection={<PhoneIcon className="w-5" />}
                        />
                    </div>
                    <div className="mb-8">
                        <Popover opened={popoverOpened} position="bottom" width="target" transitionProps={{ transition: "pop" }}>
                            <Popover.Target>
                                <div
                                    onFocusCapture={() => setPopoverOpened(true)}
                                    onBlurCapture={() => setPopoverOpened(false)}
                                >
                                    <PasswordInput
                                        placeholder="Sua senha"
                                        radius="md"
                                        size="md"
                                        onChange={(event) => {
                                            setPasswordValue(event.currentTarget.value);
                                        }}
                                    />
                                </div>
                            </Popover.Target>
                            <Popover.Dropdown>
                                <Progress color={color} value={strength} size={5} mb="xs" />
                                <PasswordRequirement label="Inclua ao menos 6 caracteres" meets={passwordValue.length > 5} />
                                {checks}
                            </Popover.Dropdown>
                        </Popover>
                    </div>
                    <Button
                        variant="filled"
                        fullWidth
                        size="md"
                        radius="md"
                        type="submit"
                        color="black"
                        component={Link}
                        href="/poc/cadastro/consumidor/token"
                    >Vamos nessa</Button>
                </form>
            </div>
        </div>
    );
}
