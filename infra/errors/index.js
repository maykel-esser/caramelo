export class InternalServerError extends Error {
    constructor({ cause }) {
        super("An unexpected error occurred.", {
            cause,
        });
        this.name = "InternalServerError";
        this.action =
            "Try again in 5 minutes. If the error continues, please contact our support";
        this.status_code = 500;
    }

    toJSON() {
        return {
            name: this.name,
            message: this.message,
            action: this.action,
            status_code: this.status_code,
        };
    }
}
