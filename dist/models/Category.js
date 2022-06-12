"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorySchema = void 0;
const mongoose_1 = require("mongoose");
exports.categorySchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    slug: { type: String, required: true },
    locale: { type: (Array), required: true },
    media: { type: MediaSchema, required: true },
});
