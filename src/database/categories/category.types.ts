import {  Types } from "mongoose";
import { ILocale } from "../locale/locale.types";
import { ILocks } from "../locks/lock.types";
import { IMedia } from "../media/media.types";
import { ISetting } from "../setting";


export interface ICategory{
    id: string;
    slug: string;    
    media: IMedia;
    locale: Types.DocumentArray<ILocale>;
    settings: ISetting;
    locks: ILocks;
    parentId?: Types.ObjectId;
    ancestorIds?: Types.Array<string>;
    product?: string;
    path?: string;
    isIndexed: boolean;
    publishedAt?: Date;
    createAt?: Date;
    updatedAt?: Date;
}
