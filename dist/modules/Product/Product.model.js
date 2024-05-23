"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = exports.ProductSchema = void 0;
const mongoose_1 = require("mongoose");
const VariantSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    value: { type: String, required: true },
});
const InventorySchema = new mongoose_1.Schema({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
});
exports.ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, "Name is required"] },
    description: { type: String, required: [true, "Description is required"] },
    price: { type: Number, required: [true, "Price is required"] },
    category: { type: String, required: true },
    tags: [String],
    variants: {
        type: [VariantSchema],
        required: [true, "Variants is required"],
        validate: {
            validator: function (v) {
                return Array.isArray(v) && v.length > 0;
            },
            message: "Variants is required",
        },
    },
    inventory: { type: InventorySchema, required: true },
});
//model
exports.ProductModel = (0, mongoose_1.model)("Product", exports.ProductSchema);
