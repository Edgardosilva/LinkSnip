import pkg from 'pg';
const { Client } = pkg;

let client;

async function initializeDatabase() {
  if (!client) {
    try {
      client = new Client({
        connectionString: process.env.POSTGRES_URL,
        ssl: {
          rejectUnauthorized: false // Es necesario solo si estás utilizando SSL
        }
      });
      await client.connect();
      console.log('Conectado a PostgreSQL');
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
      throw error;
    }
  }
  return client;
}

export default initializeDatabase;
