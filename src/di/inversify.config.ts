import { Container } from "inversify";
import { TYPES } from "./types";
import { CategoryService } from "../services/category.services";
import { ICategoryService } from "../services/interfaces/icategory.service";
import { ICategoryRepository } from "../repositories/interfaces/i-category.repository";
import { CategoryRepository } from "../repositories/category.repository";
import { CategoryModel } from "../database/categories/category.model";

const container = new Container();
container.bind<ICategoryService>(TYPES.CategoryServiceDefault).to(CategoryService);
container.bind<ICategoryRepository>(TYPES.CategoryRepositoryDefault).to(CategoryRepository);
container.bind(TYPES.PaginatedCatModel).toConstantValue(CategoryModel);
export {container };