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

export { PasswordRequirement };
