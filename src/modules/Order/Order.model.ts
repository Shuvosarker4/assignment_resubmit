import { Schema, model } from "mongoose";
import { TOrder } from "./Order.Interface";

const orderSchema = new Schema<TOrder>({
  email: {
    type: String,
  },
  productId: {
    type: String,
  },
  price: {
    type: Number,
    min: 0,
  },
  quantity: {
    type: Number,
    min: 1,
  },
});

export const Order = model<TOrder>("Order", orderSchema);
