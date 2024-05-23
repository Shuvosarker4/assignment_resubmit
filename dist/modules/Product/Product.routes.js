"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Product_controllers_1 = require("./Product.controllers");
const router = express_1.default.Router();
router.post("/", Product_controllers_1.ProductController.createProduct);
router.get("/", Product_controllers_1.ProductController.getAllProduct);
router.get("/:id", Product_controllers_1.ProductController.getSingleData);
router.delete("/:id", Product_controllers_1.ProductController.deleteData);
router.put("/:id", Product_controllers_1.ProductController.updateData);
exports.ProductRoutes = router;
