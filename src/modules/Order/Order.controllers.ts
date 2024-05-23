import { Request, Response } from "express";
import { OrderService } from "./Order.service";
import orderSchema from "./Order.validation";

const orderCreate = async (req: Request, res: Response) => {
  try {
    const OrderData = req.body;
    const zodParsedData = orderSchema.parse(OrderData);

    const result = await OrderService.orderCreate(zodParsedData);
    res.json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Failed To Fetch Data",
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.getAllOrder();
    res.json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch orders!",
      error: err,
    });
  }
};

export const OrderController = {
  orderCreate,
  getAllOrder,
};
