
import { ICategory } from "../database/categories/category.types";
import { ICategoryRepository } from "./interfaces/i-category.repository";
import RepositoryBase from "./repository.base";
import { inject, injectable } from "inversify";
import { PaginateModel } from "mongoose";
import { TYPES } from "../di/types";

@injectable()
export class CategoryRepository extends RepositoryBase<ICategory>  implements ICategoryRepository{

    constructor(@inject(TYPES.PaginatedCatModel) model: PaginateModel<ICategory>) {
        super(model);        
    }
}