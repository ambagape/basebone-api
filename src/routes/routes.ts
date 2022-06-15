import express = require("express");
import { CategoryController } from "../controllers/category.controller";
import { LocaleController } from "../controllers/locale.controller";

const router = express.Router();

class Routes {    
    get routes() {
        router.get("/categories/:id", CategoryController.show);
        router.post("/categories", CategoryController.create);
        router.get("/categories", CategoryController.showAll);
        router.get("/categories/:id/locales", CategoryController.showAll);
        router.delete("/categories", CategoryController.delete);
        router.put("/categories/:id", CategoryController.update);
        router.patch("/categories/:id", CategoryController.updatePartially);

        router.get("/locales/:id", LocaleController.show);
        router.post("/locales", LocaleController.create);
        router.get("/locales", LocaleController.showAll);
        router.delete("/locales", LocaleController.delete);
        router.put("/locales/:id", LocaleController.update);
        router.patch("/locales/:id", LocaleController.updatePartially);

        return router;
    }
}

Object.seal(Routes);
export = Routes;