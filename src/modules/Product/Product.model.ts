import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariants } from "./Product.interface";

const VariantSchema = new Schema<TVariants>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const InventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

export const ProductSchema = new Schema<TProduct>({
  name: { type: String, required: [true, "Name is required"] },
  description: { type: String, required: [true, "Description is required"] },
  price: { type: Number, required: [true, "Price is required"] },
  category: { type: String, required: true },
  tags: [String],
  variants: {
    type: [VariantSchema],
    required: [true, "Variants is required"],
    validate: {
      validator: function (v: any) {
        return Array.isArray(v) && v.length > 0;
      },
      message: "Variants is required",
    },
  },
  inventory: { type: InventorySchema, required: true },
});

//model
export const ProductModel = model<TProduct>("Product", ProductSchema);
