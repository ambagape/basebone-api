import express, { Express } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import handleError from './middleware/error-handler.middleware';
import "reflect-metadata";
import { container } from "tsyringe";
import Routes from './routes/routes';
import { CategoryService } from './services/category.services';
import { CategoryController } from './controllers/category.controller';
import { CategoryRepository } from './repositories/category.repository';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

container.register("CategoryService", {
  useClass: CategoryService
});

app.use(new Routes(container.resolve(CategoryController)).routes);
app.use(handleError);
app.listen(PORT, () => console.log(`Running on ${PORT}`));