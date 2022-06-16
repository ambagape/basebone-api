import { PaginateResult } from "mongoose";
import { ICategory } from "../../models/categories/category.types";
import { ILocale } from "../../models/locale/locale.types";

export interface ICategoryService {
    create(item: ICategory): Promise<ICategory>    
    update(id: string, item: ICategory): Promise<ICategory> 
    updatePartially(id: string, item: ICategory): Promise<ICategory>;
    show(id: string): Promise<ICategory>;    
    showLocales(id: string): Promise<Array<ILocale>>;
    getAll(page: number, pageSize: number): Promise<PaginateResult<ICategory>> 
    delete(id: string): void;
}