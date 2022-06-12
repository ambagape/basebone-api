import { model } from "mongoose";
import { ILocks } from "./lock.types";
import { locksSchema } from "./locks.schema";

export const LocksModel = model<ILocks>('Locks', locksSchema);