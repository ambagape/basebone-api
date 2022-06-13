import express = require("express");
import { ICategory } from "../database/categories/category.types";
import { container } from "../di/inversify.config";
import { TYPES } from "../di/types";
import { ICategoryService } from "../services/interfaces/icategory.service";

export class CategoryController {

    static async create(req: express.Request, res: express.Response): Promise<void> {
        const service = container.get<ICategoryService>(TYPES.CategoryServiceDefault);
        //const service = new CategoryService(new CategoryRepository());
        const category: ICategory = <ICategory>req.body;
        const result = await service.create(category);
        res.send(result);
    }

    static async showAll(req: express.Request, res: express.Response): Promise<void> {
        //const service = container.resolve(CategoryService);
        const service = container.get<ICategoryService>(TYPES.CategoryServiceDefault);
        const page = req.query.page ? req.query.page as unknown as number : 1;
        const limit = req.query.limit ? req.query.limit as unknown as number : 20;
        const result = await service.getAll(page, limit);
        res.send(result);
    }
}