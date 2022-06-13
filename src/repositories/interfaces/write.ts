import { ModifyResult } from "mongoose";

interface IWrite<T> {
    create: (item: T) => Promise<T>;
    update(_id: string, item: any, opts?: any): Promise<ModifyResult<T>>;
    delete: (_id: string, callback: (error: any, result: any) => void) => void;

}

export = IWrite;