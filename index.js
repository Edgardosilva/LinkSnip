import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import urlRoutes from './routes/urlRoutes.js'


const app = express();
const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(cors())


app.get('/', (req, res) => {
    res.send('API Root');
});
app.use('/shortUrls', urlRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

