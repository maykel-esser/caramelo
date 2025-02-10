import { mask } from "utils/mask.utils";

describe("mask", () => {
    it("should apply a numeric mask correctly", () => {
        const result = mask("123456", "000-000");
        expect(result).toBe("123-456");
    });

    it("should apply an alphanumeric mask correctly", () => {
        const result = mask("abc123", "aaa-000");
        expect(result).toBe("abc-123");
    });

    it("should handle optional characters in the mask", () => {
        const result = mask("123", "000[0]");
        expect(result).toBe("123");
        const resultWithOptional = mask("1234", "000[0]");
        expect(resultWithOptional).toBe("1234");
    });

    it("should handle empty string input gracefully", () => {
        const result = mask("", "000-000");
        expect(result).toBe("");
    });

    it("should return an empty string for an invalid mask", () => {
        const result = mask("123456", "");
        expect(result).toBe("");
    });

    it("should apply a phone number mask correctly", () => {
        const result = mask("1234567890", "(000) 000-0000");
        expect(result).toBe("(123) 456-7890");
    });
});
