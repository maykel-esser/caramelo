import database from "infra/database";
import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
    await orchestrator.waitForAllServices();
    await cleanDatabase();
});

describe("GET Migrations Endpoint", () => {
    describe("Anonymous user", () => {
        test("Running pending migrations", async () => {
            const response = await fetch(
                "http://localhost:3000/api/v1/migrations",
            );
            const responseBody = await response.json();
            expect(response.status).toBe(200);
            expect(Array.isArray(responseBody)).toBe(true);
            expect(responseBody.length).toBeGreaterThan(0);
        });
    });
});

async function cleanDatabase() {
    await database.query("DROP SCHEMA public cascade;");
    await database.query("CREATE SCHEMA public;");
}
