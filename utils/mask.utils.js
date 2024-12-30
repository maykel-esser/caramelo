import IMask from "imask";

/**
 * @function mask
 * @author Maykel Esser
 * @description Apply a mask to a string
 * @param {string} string - The string to apply the mask to
 * @param {string} mask - The mask to apply to the string
 * @returns {Date} The formatted date
 * @see https://imask.js.org/guide.html#masked-pattern
 */
function mask(string, mask) {
    const maskOptions = {
        mask: mask
    };

    const masked = IMask.createMask(maskOptions);
    masked.resolve(string);

    return masked.value;
}

export { mask };
