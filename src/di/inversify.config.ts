import { Container } from "inversify";
import { TYPES } from "./types";
import { CategoryService } from "../services/category.service";
import { ICategoryService } from "../services/interfaces/icategory.service";
import { ICategoryRepository } from "../repositories/interfaces/icategory.repository";
import { CategoryRepository } from "../repositories/category.repository";
import { CategoryModel } from "../models/categories/category.model";
import { LocaleModel } from "../models/locale/locale.model";
import { ILocaleRepository } from "../repositories/interfaces/ilocale.repository";
import { LocaleService } from "../services/locale.service";
import { ILocaleService } from "../services/interfaces/ilocale.service";
import { LocaleRepository } from "../repositories/locale.repository";


const container = new Container();
container.bind<ICategoryService>(TYPES.CategoryServiceDefault).to(CategoryService);
container.bind<ICategoryRepository>(TYPES.CategoryRepositoryDefault).to(CategoryRepository);
container.bind(TYPES.PaginatedCatModel).toConstantValue(CategoryModel);
container.bind<ILocaleService>(TYPES.LocaleServiceDefault).to(LocaleService);
container.bind<ILocaleRepository>(TYPES.LocaleRepositoryDefault).to(LocaleRepository);
container.bind(TYPES.PaginatedLocaleModel).toConstantValue(LocaleModel);
export {container };