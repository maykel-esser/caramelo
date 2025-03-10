import { InternalServerError, MethodNotAllowedError } from "infra/errors";

function onNoMatchHandler(req, res) {
    const publicErrorObject = new MethodNotAllowedError();
    return res.status(publicErrorObject.status_code).json(publicErrorObject);
}

function onErrorHandler(error, req, res) {
    const publicErrorObject = new InternalServerError({
        statusCode: error.status_code,
        cause: error,
    });
    console.error(`Controller error:`);
    console.error(publicErrorObject);
    return res.status(publicErrorObject.status_code).json(publicErrorObject);
}

const controller = {
    errorHandlers: {
        onNoMatch: onNoMatchHandler,
        onError: onErrorHandler,
    },
};

export default controller;
