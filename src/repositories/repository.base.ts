

import mongoose = require("mongoose");
import IRead = require("./interfaces/read");
import IWrite = require("./interfaces/write");

class RepositoryBase<T> implements IRead<T>, IWrite<T> {    

    constructor(private model: mongoose.Model<T>) {        
    }

    async create(item: T) : Promise<T> {
        const doc = await this.model.create(item);
        return doc;
    }

    async retrieve(): Promise<Array<T>>  {
        const result = await this.model.find({});
        return result;
    }

    async update(_id: mongoose.Types.ObjectId, item: any) {
        await this.model.updateOne({ _id: _id }, item);
    }

    async delete(_id: string) {
        await this.model.remove({ _id: this.toObjectId(_id) });
    }

    async findById(_id: string): Promise<T|null> {
        const result = await this.model.findById(_id);
        return result;
    }


    private toObjectId(_id: string): any {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }

}

export = RepositoryBase;