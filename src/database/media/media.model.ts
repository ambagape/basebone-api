
import mongoose from "mongoose";
import { mediaSchema } from "./media.schema";
import { IMedia } from "./media.types";

export const MediaModel = mongoose.model<IMedia>('Media', mediaSchema);