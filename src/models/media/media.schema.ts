import { Schema } from "mongoose";
import { IMedia } from "./media.types";

export const mediaSchema = new Schema<IMedia>({
    icon: String,
    portrait: [String],
    landscape: [String],
    sqaure: [String]
});
