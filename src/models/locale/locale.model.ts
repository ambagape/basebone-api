

import { ILocale } from "./locale.types";
import mongoose, { PaginateModel } from "mongoose";
import localeSchema from "./locale.schema";

export const LocaleModel = mongoose.model<ILocale, PaginateModel<ILocale>>('Locale', localeSchema);