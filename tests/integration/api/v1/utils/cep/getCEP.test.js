import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
    await orchestrator.waitForAllServices();
});

describe("GET CEP Endpoint", () => {
    describe("Anonymous user", () => {
        test("Valid CEP returns address data", async () => {
            const validCEP = "01001000";
            const response = await fetch(
                `http://localhost:3000/api/v1/utils/cep?cep=${validCEP}`,
            );
            const body = await response.json();

            expect(response.status).toBe(200);
            expect(body).toEqual(
                expect.objectContaining({
                    updated_at: expect.any(String),
                    data: expect.objectContaining({
                        cep: validCEP,
                        city: expect.any(String),
                        neighborhood: expect.any(String),
                        state: expect.any(String),
                        street: expect.any(String),
                        service: expect.any(String),
                    }),
                }),
            );
        });

        test("Invalid CEP returns error", async () => {
            const invalidCEP = "00000000";
            const response = await fetch(
                `http://localhost:3000/api/v1/utils/cep?cep=${invalidCEP}`,
            );
            const body = await response.json();

            expect(response.status).toBe(400);
            expect(body).toEqual(
                expect.objectContaining({
                    updated_at: expect.any(String),
                    error: expect.objectContaining({
                        message: expect.any(String),
                    }),
                }),
            );
        });

        test("Missing CEP parameter returns error", async () => {
            const response = await fetch(
                "http://localhost:3000/api/v1/utils/cep",
            );
            const body = await response.json();

            expect(response.status).toBe(400);
            expect(body).toEqual(
                expect.objectContaining({
                    error: "CEP is required",
                }),
            );
        });

        test("Non-JSON response from API returns error", async () => {
            const mockInvalidResponseCEP = "82720123";
            const response = await fetch(
                `http://localhost:3000/api/v1/utils/cep?cep=${mockInvalidResponseCEP}`,
            );
            const body = await response.json();

            expect(response.status).toBe(400);
            expect(body).toEqual(
                expect.objectContaining({
                    updated_at: expect.any(String),
                    error: expect.objectContaining({
                        message:
                            "The API returned an invalid response or the CEP is invalid.",
                    }),
                }),
            );

            jest.restoreAllMocks();
        });
    });
});
