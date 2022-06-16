import { Schema, Types } from "mongoose";

export interface IMedia{
    icon?: string;
    portrait?: Types.Array<string>;
    landscape?: Types.Array<string>;
    sqaure?: Types.Array<string>;
}