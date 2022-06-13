import express = require("express");
import { CategoryController } from "../controllers/category.controller";

const router = express.Router();

class Routes {    
    get routes() {
        router.get("/categories", CategoryController.showAll);
        router.post("/categories", CategoryController.create);
        return router;
    }
}

Object.seal(Routes);
export = Routes;