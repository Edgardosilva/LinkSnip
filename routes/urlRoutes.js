import express from 'express';
import { shortenURL, redirectURL, welcome } from '../controller/urlController.js';

const router = express.Router();

router.get('/', welcome)
router.get('/:shortUrl', redirectURL);
router.post('/api/shorten', shortenURL);


export default router;
