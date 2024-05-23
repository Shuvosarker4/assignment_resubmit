"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const Order_service_1 = require("./Order.service");
// import orderSchema from "./Order.validation";
const orderCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const OrderData = req.body;
        // const zodParsedData = orderSchema.parse(OrderData);
        const result = yield Order_service_1.OrderService.orderCreate(OrderData);
        res.json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Order not found",
        });
    }
});
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Order_service_1.OrderService.getAllOrder();
        res.json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetch orders!",
            error: err,
        });
    }
});
exports.OrderController = {
    orderCreate,
    getAllOrder,
};
