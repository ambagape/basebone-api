import mongoose, { PaginateModel } from "mongoose";
import categorySchema from "./category.schema";
import { ICategory } from "./category.types";

export const CategoryModel = mongoose.model<ICategory, PaginateModel<ICategory>>('Category', categorySchema);