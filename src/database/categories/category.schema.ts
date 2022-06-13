import { Schema, Types } from "mongoose";
import paginate from 'mongoose-paginate-v2';
import { localeSchema } from "../locale/locale.schema";
import { locksSchema } from "../locks/locks.schema";
import { mediaSchema } from "../media/media.schema";
import { settingSchema } from "../setting/setting.schema";
import { ICategory } from "./category.types";

const categorySchema = new Schema<ICategory>({
    _id: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    media: mediaSchema,
    locale: [localeSchema],
    settings: settingSchema,
    locks: locksSchema,
    parentId: {type: Types.ObjectId, ref: "Category"},
    ancestorIds: [String],
    product: String,
    path: String,
    isIndexed: Boolean,
    publishedAt: {
        type: Date,
        default: new Date(),
    },
    createAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    },
});

categorySchema.plugin(paginate);

export default categorySchema;