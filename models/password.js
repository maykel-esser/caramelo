import bcrypt from "bcryptjs";

async function hash(password) {
    const rounds = getNumberOfRounds();
    return await bcrypt.hash(password, rounds);
}

async function compare(providedPassword, storedPassword) {
    return await bcrypt.compare(providedPassword, storedPassword);
}

function getNumberOfRounds() {
    return process.env.NODE_ENV === "production" ? 14 : 1;
}

export default {
    hash,
    compare
};