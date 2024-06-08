import shortid from 'shortid';
import { createURL, getURL } from '../models/urlModel.js';
import { validateURL } from '../schemas/urlSchemas.js';

export const shortenURL = async (req, res) => {
  try {
    await validateURL(req.body);
    const longUrl = req.body.longUrl;
    const shortUrl = shortid.generate();
    await createURL(longUrl, shortUrl);
    res.json({ shortUrl });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


export const redirectURL = async (req, res) => {
  const shortUrl = req.params.shortUrl;
  try {
    const results = await getURL(shortUrl);
    if (results.length === 0) {
      return res.status(404).json({ error: "URL not found" });
    }
    res.redirect(results[0].longUrl);
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
};