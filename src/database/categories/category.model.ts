import { model, PaginateModel } from "mongoose";
import categorySchema from "./category.schema";
import { ICategory } from "./category.types";

export const CategoryModel = model<ICategory, PaginateModel<ICategory>>('Category', categorySchema);