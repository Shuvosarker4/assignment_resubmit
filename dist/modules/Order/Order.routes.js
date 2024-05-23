"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Order_controllers_1 = require("./Order.controllers");
const router = express_1.default.Router();
router.post("/", Order_controllers_1.OrderController.orderCreate);
router.get("/", Order_controllers_1.OrderController.getAllOrder);
exports.OrderRoutes = router;
