import express = require("express");
import { injectable } from "tsyringe";
import { CategoryController } from "../controllers/category.controller";

const router = express.Router();

@injectable()
class Routes {

    constructor(private _categoryController: CategoryController) {

    }
    get routes() {
        router.get("/categories", this._categoryController.showAll);
        router.post("/categories", this._categoryController.create);
        return router;
    }


}

Object.seal(Routes);
export = Routes;