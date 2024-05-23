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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const Order_service_1 = require("./Order.service");
const Order_validation_1 = __importDefault(require("./Order.validation"));
const orderCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const OrderData = req.body;
        const zodParsedData = Order_validation_1.default.parse(OrderData);
        const result = yield Order_service_1.OrderService.orderCreate(zodParsedData);
        res.json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed To Fetch Data",
        });
    }
});
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getEmail = req.query.email;
        const mail = `${getEmail}`;
        if (getEmail) {
            const result = yield Order_service_1.OrderService.getOrderByQ(mail);
            const data = result[0].email;
            // console.log(data);
            // console.log(mail);
            if (data == mail) {
                res.json({
                    success: true,
                    message: "Order created successfully!",
                    data: result,
                });
            }
            else {
                res.json({
                    success: false,
                    message: "Order not found",
                    data: null,
                });
            }
        }
        else {
            const result = yield Order_service_1.OrderService.getAllOrder();
            res.json({
                success: true,
                message: "Order created successfully!",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Wrong Info!",
            error: err,
        });
    }
});
exports.OrderController = {
    orderCreate,
    getAllOrder,
};
