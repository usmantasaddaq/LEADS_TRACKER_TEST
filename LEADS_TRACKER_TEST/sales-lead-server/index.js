import express from 'express';
import cors from 'cors';
import leadRouter from './routes/LeadRoutes.js';
import bodyParser from 'body-parser';

const app = express();


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors());

app.use('/api/lead', leadRouter);

const port = 8080;
app.listen(port, () => {
    console.log(`Server listening on port: ${port} !`);
});