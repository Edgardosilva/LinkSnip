import { Pool } from "@vercel/postgres";

export const initializeDatabase = async () => {
    const pool = new Pool({
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
    });
    return pool;
};

