import { model } from "mongoose";
import { settingSchema } from "./setting.schema";
import { ISetting } from "./setting.types";

export const SettingModel = model<ISetting>('Setting', settingSchema);