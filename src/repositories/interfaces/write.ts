import mongoose = require("mongoose");
interface IWrite<T> {
    create: (item: T) => Promise<T>;
    update: (_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) => void;
    delete: (_id: string, callback: (error: any, result: any) => void) => void;

}

export = IWrite;