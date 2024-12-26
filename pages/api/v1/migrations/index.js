import migrationRunner from "node-pg-migrate";
import database from "infra/database";
import { join } from "node:path";

/**
 * @function migrations
 * @author Maykel Esser
 *
 * @description This function is responsible for handling the migration of the database.
 *
 * @param {*} req - The request object.
 * @param {*} res - The response object.
 *
 * @returns {Array} - Returns an array with the migrations that were executed.
 */
export default async function migrations(req, res) {

    // Only GET and POST methods are allowed
    const allowedMethods = ["GET", "POST"];

    if (!allowedMethods.includes(req.method)) {
        return res.status(405).json({
            message: `Method ${req.method} Not Allowed`
        });
    }

    let dbClient;

    try {

        // Get a new client from the database
        dbClient = await database.getNewClient();

        let defaultMigrationOptions = {
            dbClient,
            dir: join("infra", "database", "migrations"),
            direction: "up",
            verbose: true,
            migrationsTable: "pgmigrations",
        };

        if (req.method === "GET") {

            // Dry run mode for test purposes - we can check all migrations without running them
            const pendingMigrations = await migrationRunner({
                ...defaultMigrationOptions,
                dryRun: true
            });

            return res.status(200).json(pendingMigrations);

        } else if (req.method === "POST") {

            const migratedMigrations = await migrationRunner({
                ...defaultMigrationOptions,
                dryRun: false
            });

            if (migratedMigrations.length > 0) {
                return res.status(201).json(migratedMigrations);
            }

            return res.status(200).json(migratedMigrations);
        }
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        await dbClient.end();
    }
}
