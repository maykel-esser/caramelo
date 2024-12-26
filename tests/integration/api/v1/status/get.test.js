import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
    await orchestrator.waitForAllServices();
});

describe("GET Status Endpoint", () => {

    test("GET Status Endpoint should return 200", async () => {
        const response = await fetch("http://localhost:3000/api/v1/status");
        expect(response.status).toBe(200);
    });

    test("GET Status Endpoint should return an object containing updated_at, dependencies.database and the required fields", async () => {

        const response = await fetch("http://localhost:3000/api/v1/status");
        const body = await response.json();

        expect(body).toEqual(
            expect.objectContaining({
                updated_at: expect.any(String),
                dependencies: expect.objectContaining({
                    database: expect.objectContaining({
                        version: expect.any(String),
                        max_connections: expect.any(Number),
                        used_connections: expect.any(Number),
                    }),
                }),
            }),
        );
    });

    test("GET Status Endpoint should return an specific database version", async () => {

        const response = await fetch("http://localhost:3000/api/v1/status");
        const body = await response.json();

        // We need the version to be 16.x (dynamic because prod and dev versions may differ)
        expect(body.dependencies.database.version).toMatch(/^16\./);
    });

    test("GET Status Endpoint should return the same date as a dummy date", async () => {

        const response = await fetch("http://localhost:3000/api/v1/status");
        const body = await response.json();

        const parsedUpdatedAt = new Date(body.updated_at).toISOString();
        expect(body.updated_at).toEqual(parsedUpdatedAt);
    });

    test("GET Status Endpoint should return the same max_connections as 100", async () => {

        const response = await fetch("http://localhost:3000/api/v1/status");
        const body = await response.json();

        // if the environment is dev, max_connections should be 100
        expect(body.dependencies.database.max_connections).toEqual(100);
    });

    test("GET Status Endpoint should return the same used_connections as 1", async () => {

        const response = await fetch("http://localhost:3000/api/v1/status");
        const body = await response.json();

        expect(body.dependencies.database.used_connections).toEqual(1);
    });

});
