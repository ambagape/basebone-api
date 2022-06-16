
import { ILocks } from "./lock.types";
import { locksSchema } from "./locks.schema";
import mongoose from "mongoose";

export const LocksModel = mongoose.model<ILocks>('Locks', locksSchema);