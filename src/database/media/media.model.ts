import { model } from "mongoose";
import { mediaSchema } from "./media.schema";
import { IMedia } from "./media.types";

export const MediaModel = model<IMedia>('Media', mediaSchema);