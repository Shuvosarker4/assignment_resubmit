import { TOrder } from "./Order.Interface";
import { Order } from "./Order.model";

const orderCreate = async (playLoad: TOrder) => {
  const result = await Order.create(playLoad);
  return result;
};

const getAllOrder = async () => {
  const result = await Order.find();
  return result;
};

const getOrderByQ = async (mail: string) => {
  const result = await Order.find({ email: mail });
  return result;
};

export const OrderService = {
  orderCreate,
  getAllOrder,
  getOrderByQ,
};
