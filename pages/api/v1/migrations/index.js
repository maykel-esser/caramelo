import database from "infra/database";
import migrationRunner from "node-pg-migrate";
import controller from "infra/controller";
import { resolve } from "node:path";
import { createRouter } from "next-connect";

const router = createRouter();
router.get(getHandler);
router.post(postHandler);

export default router.handler(controller.errorHandlers);

const defaultMigrationOptions = {
    dir: resolve("infra", "database", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
};

/**
 * @function getHandler
 * @author Maykel Esser
 * @description This function is responsible for handling the migration of the database.
 * @param {*} req - The request object.
 * @param {*} res - The response object.
 * @returns {Array} - Returns an array with the migrations that were executed.
 */
async function getHandler(req, res) {
    let dbClient;

    try {
        // Get a new client from the database
        dbClient = await database.getNewClient();

        // Dry run mode for test purposes - we can check all migrations without running them
        const pendingMigrations = await migrationRunner({
            ...defaultMigrationOptions,
            dbClient,
            dryRun: true,
        });

        return res.status(200).json(pendingMigrations);
    } finally {
        await dbClient.end();
    }
}

/**
 * @function postHandler
 * @author Maykel Esser
 *
 * @description This function is responsible for handling the migration of the database.
 *
 * @param {*} req - The request object.
 * @param {*} res - The response object.
 *
 * @returns {Array} - Returns an array with the migrations that were executed.
 */
async function postHandler(req, res) {
    let dbClient;

    try {
        // Get a new client from the database
        dbClient = await database.getNewClient();

        const migratedMigrations = await migrationRunner({
            ...defaultMigrationOptions,
            dbClient,
            dryRun: false,
        });

        if (migratedMigrations.length > 0) {
            return res.status(201).json(migratedMigrations);
        }

        return res.status(200).json(migratedMigrations);
    } finally {
        await dbClient.end();
    }
}
