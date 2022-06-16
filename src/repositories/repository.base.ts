import { ModifyResult, PaginateModel, PaginateResult } from "mongoose";
import IRead = require("./interfaces/read");
import IWrite = require("./interfaces/write");
import { injectable } from "inversify";


@injectable()
class RepositoryBase<T> implements IRead<T>, IWrite<T> {

    constructor(protected model: PaginateModel<T>) {
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

    async update(id: string, item: any, opts?: any): Promise<ModifyResult<T>> {
        const result = await this.model.findByIdAndUpdate(id, item, opts);        
        return result;
    }   

    async delete(id: string) {            
        await this.model.deleteOne({ _id: id });
    }

    async findById(_id: string): Promise<T | null> {
        const result = await this.model.findById(_id);
        return result;
    }
}

export = RepositoryBase;