import database from "../../../../infra/database";

export default async function status(req, res) {
    const result = await database.query("SELECT 1 + 1 as sum;");
    res.status(200).json({ status: 'ok' });
}
