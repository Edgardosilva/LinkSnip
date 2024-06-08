import db from '../database/db.js'

export const createURL = async (longUrl, shortUrl) => {
  const query = "INSERT INTO urls (longUrl, shortUrl) VALUES (?, ?)";
  await db.execute(query, [longUrl, shortUrl]);
};

export const getURL = async (shortUrl) => {
  const query = "SELECT longUrl FROM urls WHERE shortUrl = ?";
  const [results] = await db.execute(query, [shortUrl]);
  return results;
};
