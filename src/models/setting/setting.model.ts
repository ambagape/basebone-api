
import { settingSchema } from "./setting.schema";
import { ISetting } from "./setting.types";
import mongoose from "mongoose";

export const SettingModel = mongoose.model<ISetting>('Setting', settingSchema);