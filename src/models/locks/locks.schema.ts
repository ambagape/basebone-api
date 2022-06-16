import { Schema } from "mongoose";
import { ILocks } from "./lock.types";

export const locksSchema = new Schema<ILocks>({
    isLockedForEditing: String,
    currentEditor: String,
    isLockedForModerationProcess: String,
    isLockedForBackendProcess: String,
    currentBackendProcess: String
});