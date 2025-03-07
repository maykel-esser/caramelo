import { useState } from "react";
import { PasswordInput, Progress, Popover } from "@mantine/core";
import { getStrength, passwordRequirementsRules } from "utils/password.utils";

// Icons
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";

/**
 * @function PasswordRequirement
 * @author Maykel Esser
 * @description A password requirement component to show if the password meets the requirements or not
 * @param {object} props
 * @param {boolean} props.meets - If the password meets the requirement
 * @param {string} props.label - The requirement label
 * @returns {JSX.Element} The PasswordRequirement component
 */
function PasswordRequirement({ meets, label }) {
    return (
        <div
            className={`flex items-center mt-2 text-sm ${meets ? "text-teal-500" : "text-red-500"}`}
        >
            {meets ? (
                <CheckIcon className="w-3" />
            ) : (
                <XMarkIcon className="w-3" />
            )}
            <span className="ml-2">{label}</span>
        </div>
    );
}

/**
 * @function NewPasswordInput
 * @author Maykel Esser
 * @description A password input component with a popover to show the password strength
 * @param {object} props
 * @param {string} props.placeholder - The input placeholder
 * @returns {JSX.Element} The NewPasswordInput component
 */
function NewPasswordInput(props) {
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
        <Popover
            opened={popoverOpened}
            position="bottom"
            width="target"
            transitionProps={{ transition: "pop" }}
        >
            <Popover.Target>
                <div
                    onFocusCapture={() => setPopoverOpened(true)}
                    onBlurCapture={() => setPopoverOpened(false)}
                >
                    <PasswordInput
                        placeholder={props.placeholder}
                        onChange={(event) => {
                            setPasswordValue(event.currentTarget.value);
                        }}
                    />
                </div>
            </Popover.Target>
            <Popover.Dropdown>
                <Progress color={color} value={strength} size={5} mb="xs" />
                {checks}
            </Popover.Dropdown>
        </Popover>
    );
}

export { PasswordRequirement, NewPasswordInput };
