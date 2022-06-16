import { Types } from "mongoose";
import { ICategory } from "../../models/categories/category.types";
import { ILocale } from "../../models/locale/locale.types";
import IRead from "./read";
import IWrite from "./write";

export interface ICategoryRepository extends IRead<ICategory>, IWrite<ICategory>{

    getLocales(id: string): Promise<Types.Array<ILocale>>;
}