import { model } from "mongoose";
import { localeSchema } from "./locale.schema";
import { ILocale } from "./locale.types";

export const LocaleModel = model<ILocale>('Locale', localeSchema);