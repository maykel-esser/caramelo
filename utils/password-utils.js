import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";

function passwordRequirementsRules() {
    const requirements = [
        { re: /.{6,}/, label: "Inclua ao menos 6 caracteres" },
        { re: /[0-9]/, label: "Inclua um número" },
        { re: /[a-z]/, label: "Inclua ao menos uma letra minúscula" },
        { re: /[A-Z]/, label: "Inclua ao menos uma letra maiúscula" },
        { re: /[$&+,:;=?@#|"<>.^*()%!-]/, label: "Inclua ao menos um caractere especial" },
    ];
    return requirements;
}

function PasswordRequirement({ meets, label }) {
    return (
        <div className={`flex items-center mt-2 text-sm ${meets ? "text-teal-500" : "text-red-500"}`}>
            {meets ? (
                <CheckIcon className="w-3" />
            ) : (
                <XMarkIcon className="w-3" />
            )}
            <span className="ml-2">{label}</span>
        </div>
    );
}

function getStrength(password) {

    let multiplier = password.length > 5 ? 0 : 1;
    let requirements = passwordRequirementsRules();

    requirements.forEach((requirement) => {
        if (!requirement.re.test(password)) {
            multiplier += 1;
        }
    });

    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

export { PasswordRequirement, getStrength, passwordRequirementsRules };
