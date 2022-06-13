import express = require("express");
import { inject, injectable } from "tsyringe";
import { ICategory } from "../database/categories/category.types";
import { ICategoryService } from "../services/interfaces/icategory.service";

@injectable()
export class CategoryController {

    constructor(@inject("CategoryService") private _service: ICategoryService) {
    }

    async create(req: express.Request, res: express.Response): Promise<void> {
        const category: ICategory = <ICategory>req.body;
        const result = await this._service.create(category);
        res.send(result);
    }

    async showAll(req: express.Request, res: express.Response): Promise<void> {  
        const page = req.query.page? req.query.page as unknown as number: 1;
        const limit = req.query.limit?  req.query.limit as unknown as number: 20;      
        const result = await this._service.getAll(page, limit);
        res.send(result);
    }  
}