import { getStrength, passwordRequirementsRules } from "utils/password.utils";

describe("getStrength", () => {
    it("Should return score 10 for empty password", () => {
        const strength = getStrength("");
        expect(strength).toBe(10);
    });

    it("Should return a score < 50 for a weak password", () => {
        const strength = getStrength("12345");
        expect(strength).toBeLessThan(50);
    });

    it("Should return strength > 50 and < 100 for a medium password", () => {
        const strength = getStrength("12345aA");
        expect(strength).toBeGreaterThan(50);
        expect(strength).toBeLessThan(100);
    });

    it("Should return 100 for a strong password", () => {
        const strength = getStrength("12345aA!");
        expect(strength).toBe(100);
    });

    it("Should handle passwords shorter than 6 characters as a low score", () => {
        const strength = getStrength("1aA!");
        expect(strength).toBeLessThan(67);
    });
});

describe("passwordRequirementsRules", () => {
    it("Should return an array with requirements, containing two fields each: re and label", () => {
        const requirements = passwordRequirementsRules();

        expect(requirements).toBeInstanceOf(Array);

        requirements.forEach((requirement) => {
            expect(requirement).toHaveProperty("re");
            expect(requirement).toHaveProperty("label");
        });
    });
});
