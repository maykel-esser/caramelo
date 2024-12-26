import database from "infra/database";
import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
    await orchestrator.waitForAllServices();
    await cleanDatabase();
});

describe("POST Migrations Endpoint", () => {

    test("POST Migrations Endpoint should return 200", async () => {
        const response = await fetch("http://localhost:3000/api/v1/migrations", {
            method: "POST"
        });
        const responseBody = await response.json();

        expect(response.status).toBe(201);
        expect(Array.isArray(responseBody)).toBe(true);
        expect(responseBody.length).toBeGreaterThanOrEqual(1);

        // Request #2
        const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
            method: "POST"
        });
        const responseBody2 = await response2.json();

        expect(response2.status).toBe(200);
        expect(Array.isArray(responseBody2)).toBe(true);
        expect(responseBody2.length).toBe(0);
    });

});

async function cleanDatabase() {
    await database.query("DROP SCHEMA public CASCADE;");
    await database.query("CREATE SCHEMA public;");
}
