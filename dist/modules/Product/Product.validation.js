"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchemaValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const VariantSchemaValidation = zod_1.default.object({
    type: zod_1.default.string().nonempty("Type is required"),
    value: zod_1.default.string().nonempty("Value is required"),
});
const InventorySchemaValidation = zod_1.default.object({
    quantity: zod_1.default.number().min(0, "Quantity must be a positive number"),
    inStock: zod_1.default.boolean(),
});
exports.ProductSchemaValidation = zod_1.default.object({
    name: zod_1.default.string().nonempty("Name is required"),
    description: zod_1.default.string().nonempty("Description is required"),
    price: zod_1.default.number().positive("Price must be a positive number"),
    category: zod_1.default.string().nonempty("Category is required"),
    tags: zod_1.default.array(zod_1.default.string()),
    variants: zod_1.default.array(VariantSchemaValidation).nonempty("Variants is required"),
    inventory: InventorySchemaValidation,
});
