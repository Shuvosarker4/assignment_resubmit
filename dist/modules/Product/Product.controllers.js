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
exports.ProductController = void 0;
const Product_service_1 = require("./Product.service");
const Product_validation_1 = require("./Product.validation");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const zodData = Product_validation_1.ProductSchemaValidation.parse(data);
        const result = yield Product_service_1.ProductService.createProductInDB(zodData);
        res.json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.json({
            success: false,
            message: "Failed to fetch data!",
            data: err,
        });
    }
});
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Product_service_1.ProductService.getAllProductFromDB();
        res.json({
            success: true,
            message: "All Product get successfully!",
            data: result,
        });
    }
    catch (err) {
        res.json({
            success: true,
            message: "Failed to fetch data!",
            data: err,
        });
    }
});
const getSingleData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        console.log(id);
        // const data = `${id}`
        const result = yield Product_service_1.ProductService.getSingleDataFromDB(id);
        res.json({
            success: true,
            message: "Product get successfully!",
            data: result,
        });
    }
    catch (err) {
        res.json({
            success: true,
            message: "Failed to fetch data!",
            data: err,
        });
    }
});
exports.ProductController = {
    createProduct,
    getAllProduct,
    getSingleData,
};
