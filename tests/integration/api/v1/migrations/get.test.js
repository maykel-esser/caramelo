import database from "infra/database";
import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
    await orchestrator.waitForAllServices();
    await cleanDatabase();
});

describe("GET Migrations Endpoint", () => {
    test("GET Migrations Endpoint should return 200", async () => {
        const response = await fetch("http://localhost:3000/api/v1/migrations");
        expect(response.status).toBe(200);
    });

    test("GET Migrations Endpoint should return an array", async () => {
        const response = await fetch("http://localhost:3000/api/v1/migrations");
        const responseBody = await response.json();

        expect(Array.isArray(responseBody)).toBe(true);
        expect(responseBody.length).toBeGreaterThan(0);
    });
});

async function cleanDatabase() {
    await database.query("DROP SCHEMA public cascade;");
    await database.query("CREATE SCHEMA public;");
}
