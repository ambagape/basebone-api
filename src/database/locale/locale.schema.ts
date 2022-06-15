import { Schema, Types } from "mongoose";
import { ILocale } from "./locale.types";

export const localeSchema = new Schema<ILocale>({
    languageIso: String,
    title: String,
    seoTitle: String,
    summary: String,
    seoSummary: String,
    description: String,
    seoDescription: String,
    specifySeoValues: Boolean    
});