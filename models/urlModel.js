import { initializeDatabase } from '../database/db.js'

export const createURL = async (longUrl, shortUrl) => {
  const db = await initializeDatabase();
  const query = "INSERT INTO urls (longUrl, shortUrl) VALUES (?, ?)";
  await db.execute(query, [longUrl, shortUrl]);
};

export const getURL = async (shortUrl) => {
  try {
    const db = await initializeDatabase();
    const query = 'SELECT longUrl FROM urls WHERE shortUrl = ?';
    const [rows] = await db.query(query, [shortUrl]);
    return rows;
  } catch (error) {
    console.error('Error al acceder a la base de datos:', error);
    throw error;
  }
};