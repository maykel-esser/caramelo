/**
 * @function passwordRequirementsRules
 * @author Maykel Esser
 * @description Get the password requirements rules
 * @returns {object[]} The password requirements rules
 */
function passwordRequirementsRules() {

    const requirements = [
        { re: /.{6,}/, label: "Inclua ao menos 6 caracteres" },
        { re: /[0-9]/, label: "Inclua um número" },
        { re: /[a-z]/, label: "Inclua ao menos uma letra minúscula" },
        { re: /[A-Z]/, label: "Inclua ao menos uma letra maiúscula" },
        { re: /[$&+,:;=?@#|"<>.^*()%!-]/, label: "Inclua ao menos um caractere especial" },
    ];

    return requirements;
};

/**
 * @function getStrength
 * @author Maykel Esser
 * @description Get the password strength based on the requirements
 * @param {*} password
 * @returns {number} The password strength
 */
function getStrength(password) {

    let multiplier = password.length > 5 ? 0 : 1;
    let requirements = module.exports.passwordRequirementsRules();

    requirements.forEach((requirement) => {
        if (!requirement.re.test(password)) {
            multiplier += 1;
        }
    });

    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

export {
    passwordRequirementsRules,
    getStrength
}
