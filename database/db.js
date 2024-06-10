import pkg from "pg";
const { Client } = pkg;

let client;

async function initializeDatabase() {
  if (!client) {
    try {
      client = new Client({
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DATABASE,
        password: process.env.POSTGRES_PASSWORD,
        port: process.env.DB_PORT,
        ssl: false,
      });
      await client.connect();
      console.log("Conectado a PostgreSQL");
    } catch (error) {
      console.error("Error al conectar a la base de datos:", error.message);
      console.error("Stack trace:", error.stack);
      throw error;
    }
  }
  return client;
}

export default initializeDatabase;
