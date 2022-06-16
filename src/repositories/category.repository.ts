
import { ICategory } from "../models/categories/category.types";
import { ICategoryRepository } from "./interfaces/icategory.repository";
import RepositoryBase from "./repository.base";
import { inject, injectable } from "inversify";
import { PaginateModel, Types } from "mongoose";
import { TYPES } from "../di/types";
import { ILocale } from "../models/locale/locale.types";
import { NotFoundError } from "../services/errors/not-found.error";

@injectable()
export class CategoryRepository extends RepositoryBase<ICategory>  implements ICategoryRepository{

    constructor(@inject(TYPES.PaginatedCatModel) model: PaginateModel<ICategory>) {
        super(model);        
    }  

    async getLocales(id: string): Promise<Types.Array<ILocale>> {
        const cat = this.model.findById(id);
        if (!cat)
            throw new NotFoundError('Category does not exist');
        const result = (await cat.populate('locale'));
        return (result as ICategory).locale;
    }
}