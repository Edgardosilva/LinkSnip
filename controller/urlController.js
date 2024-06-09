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
  const shorturl = req.params.shorturl;
  try {
    const results = await getURL(shorturl);
    if (results.length === 0) {
      return res.status(404).json({ error: "ShortURL not found" });
    }
    res.redirect(results[0].longurl);
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
};

export const welcome = (req, res) => {
  res.send('Welcome to the URL shortener API');
}