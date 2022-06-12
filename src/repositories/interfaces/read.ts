import mongoose from "mongoose";

interface IRead<T> {
    retrieve: ()=>  Promise<T[]>;
    findById: (id: string) =>  Promise<T|null>;    
} 

export = IRead;