import { Schema } from "mongoose";
import { ISetting } from "./setting.types";

export const settingSchema = new Schema<ISetting>({
    isPremium: Boolean,
    excludedDomains: [String],
    excludedCountriesIso: [String],
    ageRating: String
});
 