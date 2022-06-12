import { Model } from "mongoose";
import { ICategory } from "../database/categories/category.types";
import RepositoryBase from "../repositories/repository.base";
import { ICategoryService } from "./interfaces/icategory.service";

class CategoryService implements ICategoryService{

    constructor(private repository: RepositoryBase<ICategory>){

    }

    async create(item: ICategory): Promise<ICategory> {
         const created = await this.repository.create(item);
         return created;
    }
    put(id: string, item: ICategory): Promise<ICategory> {
        throw new Error("Method not implemented.");
    }
    patch(id: string, item: ICategory): Promise<ICategory> {
        throw new Error("Method not implemented.");
    }
    show(id: string): Promise<ICategory> {
        throw new Error("Method not implemented.");
    }
    getAll(page: number, pageSize: number): Promise<ICategory[]> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): void{
        throw new Error("Method not implemented.");
    }

}