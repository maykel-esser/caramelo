import controller from "infra/controller";
import { createRouter } from "next-connect";

const router = createRouter();
router.post(postHandler);

export default router.handler(controller.errorHandlers);

/**
 * @function postHandler
 * @author Maykel Esser
 * @description This function is responsible to get the data from the QRCode from the client
 * - The updated_at field must contain the current date in ISO format.
 * - The message field must contain the message to the client.
 * @param {*} req - The request object.
 * @param {*} res - The response object.
 * @returns {Object} - Returns an object with the status of the application.
 */
async function postHandler(req, res) {
    const updatedAt = new Date().toISOString();
    const { qrCode: clientId } = req.body;

    // We will need to search the clientId in the database
    // If the clientId is not found, we will return an error
    // If the clientId is found, we will return the client data

    return res.status(200).json({
        updated_at: updatedAt,
        message: "QRCode validado com sucesso",
        data: clientId,
    });
}
