import initializeDatabase from '../database/db.js';

export const createURL = async (longUrl, shortUrl) => {
  const db = await initializeDatabase();
  const query = "INSERT INTO urls (longUrl, shortUrl) VALUES (?, ?)";
  await db.execute(query, [longUrl, shortUrl]);
};

export const getURL = async (shortUrl) => {
  const db = await initializeDatabase();
  const query = 'SELECT "longurl" FROM "urls" WHERE "shorturl" = $1';
  const results = await db.query(query, [shortUrl]);
  return results.rows;
};
