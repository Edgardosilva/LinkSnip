import express from 'express';
import { shortenURL, redirectURL } from '../controller/urlController.js';

const router = express.Router();

router.post('/api/shorten', shortenURL);
router.get('/:shortUrl', redirectURL);

export default router;
