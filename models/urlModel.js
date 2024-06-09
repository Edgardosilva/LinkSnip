import initializeDatabase from '../database/db.js';

export const createURL = async (longUrl, shortUrl) => {
  const db = await initializeDatabase();
  const query = "INSERT INTO urls (longUrl, shortUrl) VALUES (?, ?)";
  await db.execute(query, [longUrl, shortUrl]);
};

export const getURL = async (shortUrl) => {
  const db = await initializeDatabase();
  const query = "SELECT longUrl FROM urls WHERE shortUrl = ?";
  const [results] = await db.execute(query, [shortUrl]);
  return results;
};
