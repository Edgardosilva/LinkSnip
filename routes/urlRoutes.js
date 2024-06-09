import express from 'express';
import { shortenURL, redirectURL } from '../controller/urlController.js';

const router = express.Router();

router.post('/api/shorten', shortenURL);
router.get('/:shortUrl', redirectURL);
router.get('/', (req, res) => {
  res.send('Welcome to the URL shortener API');
});

export default router;
