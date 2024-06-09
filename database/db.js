import mysql from 'mysql2/promise';

let db;

async function initializeDatabase() {
  if (!db) {
    try {
      db = await mysql.createConnection({
        host: process.env.POSTGRES_HOST || 'localhost',
        user: process.env.POSTGRES_USER || 'root',
        password: process.env.POSTGRES_PASSWORD || 'root',
        database: process.env.POSTGRES_DATABASE || 'urlshortener',
        connectTimeout: 10000 // Tiempo de espera en milisegundos
      });
      console.log('Conectado a MySQL');
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
      throw error;
    }
  }
  return db;
}

export default initializeDatabase;
