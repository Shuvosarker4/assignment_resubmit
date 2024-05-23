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
    const getEmail = req.query.email;
    const mail = `${getEmail}`;
    if (getEmail) {
      const result = await OrderService.getOrderByQ(mail);
      const data = result[0].email;
      // console.log(data);
      // console.log(mail);
      if (data == mail) {
        res.json({
          success: true,
          message: "Order created successfully!",
          data: result,
        });
      } else {
        res.json({
          success: false,
          message: "Order not found",
          data: null,
        });
      }
    } else {
      const result = await OrderService.getAllOrder();
      res.json({
        success: true,
        message: "Order created successfully!",
        data: result,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Wrong Info!",
      error: err,
    });
  }
};

export const OrderController = {
  orderCreate,
  getAllOrder,
};
