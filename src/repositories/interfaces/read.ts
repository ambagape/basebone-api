import mongoose, { PaginateResult } from "mongoose";

interface IRead<T> {    
    getAll: (page: number, pageSize: number) => Promise<PaginateResult<T>> ;
    findById: (id: string) =>  Promise<T|null>;    
} 

export = IRead;