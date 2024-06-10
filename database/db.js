import mysql from 'mysql2/promise';
import { URL } from 'url'; // Importa la clase URL para parsear la URL de conexión

let db;

export async function initializeDatabase() {
  try {
    // Parsear la URL de conexión
    const url = new URL(process.env.RAILWAY_MYSQL_URL);
    const dbOptions = {
      host: url.hostname,
      port: url.port,
      user: url.username,
      password: url.password,
      database: url.pathname.substring(1), // Elimina el slash inicial del nombre de la base de datos
      connectTimeout: 10000 // Tiempo de espera en milisegundos
    };

    // Crear la conexión a la base de datos
    db = await mysql.createConnection(dbOptions);
    
    console.log('Conectado a MySQL');
    return db; // devuelve la conexión
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    throw error;
  }
}
