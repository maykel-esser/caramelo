import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
    await orchestrator.waitForAllServices();
});

describe("POST Retrieve Credits", () => {
    describe("Anonymous user", () => {
        test("Retrieving pending migrations", async () => {
            const response = await fetch(
                "http://localhost:3000/api/v1/credits/retrieve",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        qrCode: "67a022596c959096f38b51a2"
                    }),
                },
            );
            const responseBody = await response.json();
            expect(response.status).toBe(200);

            // expect to be an object with the following keys:
            expect(responseBody).toHaveProperty("updated_at");
            expect(responseBody).toHaveProperty("message");
            expect(responseBody).toHaveProperty("data");
        });
    });
});
