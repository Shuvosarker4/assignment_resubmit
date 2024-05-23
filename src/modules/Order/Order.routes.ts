import express from "express";
import { OrderController } from "./Order.controllers";
const router = express.Router();

router.post("/", OrderController.orderCreate);
router.get("/", OrderController.getAllOrder);

export const OrderRoutes = router;
