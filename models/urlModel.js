import initializeDatabase from '../database/db.js';

export const createURL = async (longUrl, shortUrl) => {
  const db = await initializeDatabase();
  const query = "INSERT INTO urls (longUrl, shortUrl) VALUES (?, ?)";
  await db.execute(query, [longUrl, shortUrl]);
};

export const getURL = async (shortUrl) => {
  try {
    const db = await initializeDatabase();
    const query = 'SELECT longurl FROM urls WHERE shorturl = ?';
    const results = await db.query(query, [shortUrl]);
    return results.rows;
  } catch (error) {
    console.error('Error al acceder a la base de datos:', error);
    throw error; // Lanza el error para que pueda ser manejado en el bloque catch de redirectURL
  }
};
