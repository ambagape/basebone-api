import { Types } from "mongoose";
import { ICategory } from "../categories/category.types";

export interface ILocale{
    _id: Types.ObjectId;
    languageIso: string;
    title: string;
    seoTitle: string;
    summary: string;
    seoSummary: string;
    description: string;
    seoDescription: string;
    specifySeoValues: boolean;
    category: Types.ObjectId | ICategory;
}

