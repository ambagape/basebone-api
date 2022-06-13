import { PaginateResult } from "mongoose";
import { ICategory } from "../database/categories/category.types";
import RepositoryBase from "../repositories/repository.base";
import { NotFoundError } from "./errors/not-found.error";
import { ICategoryService } from "./interfaces/icategory.service";

class CategoryService implements ICategoryService {

    constructor(private repository: RepositoryBase<ICategory>) {

    }

    async create(item: ICategory): Promise<ICategory> {
        const created = await this.repository.create(item);
        return created;
    }

    async update(id: string, item: ICategory): Promise<ICategory> {
        const result = await this.repository.update(id, item, { overwrite: true, new: true });                  
        if (!result.value) {
            throw new NotFoundError("Could not update category");
        }
        return result.value as ICategory;
    }

    async updatePartially(id: string, item: any): Promise<ICategory> {        
        const result = await this.repository.update(id, item); 
        if (!result.value) {
            throw new NotFoundError("Could not update category");
        }
        return result.value as ICategory;
    }

    async show(id: string): Promise<ICategory> {
        const result = await this.repository.findById(id);
        if (!result)
            throw new NotFoundError('Category does not exist');
        return result;
    }
    async getAll(page: number, pageSize: number): Promise<PaginateResult<ICategory>> {
        const result = await this.repository.getAll(page, pageSize);
        return result;
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }

}