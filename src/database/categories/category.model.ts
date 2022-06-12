import { model } from "mongoose";
import { categorySchema } from "./category.schema";
import { ICategory } from "./category.types";

export const CategoryModel = model<ICategory>('Category', categorySchema);