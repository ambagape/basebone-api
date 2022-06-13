import { PaginateResult } from "mongoose";
import { ICategory } from "../../database/categories/category.types";

export interface ICategoryService {
    create(item: ICategory): Promise<ICategory>    
    update(id: string, item: ICategory): Promise<ICategory> 
    updatePartially(id: string, item: ICategory): Promise<ICategory>;
    show(id: string): Promise<ICategory>;    
    getAll(page: number, pageSize: number): Promise<PaginateResult<ICategory>> 
    delete(id: string): void;
}