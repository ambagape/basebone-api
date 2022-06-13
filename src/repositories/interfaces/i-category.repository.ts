import { ICategory } from "../../database/categories/category.types";
import IRead from "./read";
import IWrite from "./write";

export interface ICategoryRepository extends IRead<ICategory>, IWrite<ICategory>{

}