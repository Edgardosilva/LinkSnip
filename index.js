import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import urlRoutes from './routes/urlRoutes.js';
import { initializeDatabase } from './database/db.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(cors())


app.use('/', urlRoutes);

// Inicializar Firebase
initializeDatabase();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

