

import { ModifyResult, PaginateModel, PaginateResult } from "mongoose";
import mongoose = require("mongoose");
import IRead = require("./interfaces/read");
import IWrite = require("./interfaces/write");


class RepositoryBase<T> implements IRead<T>, IWrite<T> {

    constructor(private model: PaginateModel<T>) {
    }

    async create(item: T): Promise<T> {
        const doc = await this.model.create(item);
        return doc;
    }

    async getAll(page: number, pageSize: number): Promise<PaginateResult<T>> {
        const options = {
            page: page,
            limit: pageSize,
            collation: {
                locale: 'en',
            },
        };
        const result = await this.model.paginate({}, options);
        return result;
    }

    async update(_id: string, item: any, opts?: any): Promise<ModifyResult<T>> {
        const result = await this.model.findByIdAndUpdate({ _id: this.toObjectId(_id) }, item, opts);        
        return result;
    }   

    async delete(_id: string) {
        await this.model.remove({ _id: this.toObjectId(_id) });
    }

    async findById(_id: string): Promise<T | null> {
        const result = await this.model.findById(_id);
        return result;
    }

    private toObjectId(_id: string): any {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }

}

export = RepositoryBase;