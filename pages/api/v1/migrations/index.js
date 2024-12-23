import migrationRunner from "node-pg-migrate";
import { join } from "node:path";
import database from "infra/database";

export default async function migrations(req, res) {

    const dbClient = await database.getNewClient();

    let defaultMigrationOptions = {
        dbClient,
        dir: join("infra", "database", "migrations"),
        direction: "up",
        verbose: true,
        migrationsTable: "pgmigrations",
    };

    if (req.method === "GET") {

        const pendingMigrations = await migrationRunner({
            ...defaultMigrationOptions,
            dryRun: true
        });

        await dbClient.end();

        return res.status(200).json(pendingMigrations);

    } else if (req.method === "POST") {

        const migratedMigrations = await migrationRunner({
            ...defaultMigrationOptions,
            dryRun: false
        });

        await dbClient.end();

        if (migratedMigrations.length > 0) {
            return res.status(201).json(migratedMigrations);
        }

        return res.status(200).json(migratedMigrations);
    }

    return res.status(405).end();

}
