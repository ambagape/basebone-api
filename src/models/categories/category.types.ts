import {  Types } from "mongoose";
import { ILocale } from "../locale/locale.types";
import { ILocks } from "../locks/lock.types";
import { IMedia } from "../media/media.types";
import { ISetting } from "../setting/setting.types";


export interface ICategory{
    _id: Types.ObjectId;
    slug: string;    
    media: IMedia;
    locale: Types.Array<ILocale>;
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
