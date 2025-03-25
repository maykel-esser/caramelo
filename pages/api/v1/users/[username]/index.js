import users from "models/user";
import controller from "infra/controller";
import { createRouter } from "next-connect";

const router = createRouter();
router.get(getHandler);

export default router.handler(controller.errorHandlers);

/**
 * @function getHandler
 * @author Maykel Esser
 *
 * @description This function is responsible for handling the creation of a new user.
 *
 * @param {*} req - The request object.
 * @param {*} res - The response object.
 *
 * @returns {Object} - Returns an object with the user that was created.
 */
async function getHandler(req, res) {
    const { username } = req.query;
    const user = await users.findOneByUsername(username);
    return res.status(200).json(user);
}
