import express, { Express } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import handleError from './middleware/error-handler.middleware';
import "reflect-metadata";
import Routes from './routes/routes';
import mongoose from 'mongoose'

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

mongoose.connect(`${process.env.DATABASE_URL}`).then(() => { 
    console.log("Connection to db established") 
});

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(new Routes().routes);
app.use(handleError);
app.listen(PORT, () => console.log(`Running on ${PORT}`));