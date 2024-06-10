import { db } from "@vercel/postgres";

export const initializeDatabase = async () => {
    const client = db.connect({
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
    });
    return client;
};

