import Link from "next/link";
import { useState } from "react";
import { PasswordRequirement } from "components/pages/poc/form/password";
import { Button, PasswordInput, Progress, Popover } from "@mantine/core";
import { getStrength, passwordRequirementsRules } from "utils/password.utils";

export default function Page() {
    // State settings
    const [passwordValue, setPasswordValue] = useState("");
    const [popoverOpened, setPopoverOpened] = useState(false);

    // Password meter
    const requirements = passwordRequirementsRules();
    const strength = getStrength(passwordValue);
    const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";

    const checks = requirements.map((requirement, index) => (
        <PasswordRequirement
            key={index}
            label={requirement.label}
            meets={requirement.re.test(passwordValue)}
        />
    ));

    return (
        <div className="flex items-center justify-center min-h-screen p-10">
            <div className="w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-5">Crie uma nova senha</h1>
                <form className="text-left">
                    <div className="mb-3">
                        <Popover
                            opened={popoverOpened}
                            position="bottom"
                            width="target"
                            transitionProps={{ transition: "pop" }}
                        >
                            <Popover.Target>
                                <div
                                    onFocusCapture={() =>
                                        setPopoverOpened(true)
                                    }
                                    onBlurCapture={() =>
                                        setPopoverOpened(false)
                                    }
                                >
                                    <PasswordInput
                                        placeholder="Digite a nova senha"
                                        radius="md"
                                        size="md"
                                        onChange={(event) => {
                                            setPasswordValue(
                                                event.currentTarget.value,
                                            );
                                        }}
                                    />
                                </div>
                            </Popover.Target>
                            <Popover.Dropdown>
                                <Progress
                                    color={color}
                                    value={strength}
                                    size={5}
                                    mb="xs"
                                />
                                {checks}
                            </Popover.Dropdown>
                        </Popover>
                    </div>
                    <div className="mb-8">
                        <PasswordInput
                            placeholder="Confirme sua nova senha"
                            required
                            size="md"
                            radius="md"
                        />
                    </div>
                    <Button
                        variant="filled"
                        fullWidth
                        size="md"
                        radius="md"
                        type="submit"
                        color="black"
                        component={Link}
                        href="/poc/forgot-my-password/success"
                    >
                        Validar
                    </Button>
                </form>
            </div>
        </div>
    );
}
