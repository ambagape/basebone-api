
import { CategoryModel } from "../database/categories/category.model";
import { ICategory } from "../database/categories/category.types";
import RepositoryBase from "./repository.base";

export class CategoryRepository extends RepositoryBase<ICategory>{

    constructor() {
        super(CategoryModel);        
    }
}