import mysql from 'mysql2/promise';

let db;

async function initializeDatabase() {
  try {
    db = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'urlshortener',
      connectTimeout: 10000 // Tiempo de espera en milisegundos
    });
    console.log('Conectado a MySQL');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

await initializeDatabase();

export default db;
