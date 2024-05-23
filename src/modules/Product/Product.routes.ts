import express from "express";
import { ProductController } from "./Product.controllers";
const router = express.Router();

router.post("/", ProductController.createProduct);
router.get("/", ProductController.getAllProduct);
router.get("/:id", ProductController.getSingleData);
router.delete("/:id", ProductController.deleteData);

export const ProductRoutes = router;
