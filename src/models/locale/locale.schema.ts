import { Schema, Types } from "mongoose";
import { ILocale } from "./locale.types";
import paginate from 'mongoose-paginate-v2';

const localeSchema = new Schema<ILocale>({
    languageIso: String,
    title: String,
    seoTitle: String,
    summary: String,
    seoSummary: String,
    description: String,
    seoDescription: String,
    specifySeoValues: {
        type: Boolean,
        default: false,
    }
});

localeSchema.plugin(paginate);
export default localeSchema;