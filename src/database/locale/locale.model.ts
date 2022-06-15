
import { localeSchema } from "./locale.schema";
import { ILocale } from "./locale.types";
import mongoose from "mongoose";

export const LocaleModel = mongoose.model<ILocale>('Locale', localeSchema);