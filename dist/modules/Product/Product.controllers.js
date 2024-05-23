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
//create data
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
//get all and query data
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const phoneName = req.query.searchTerm;
        const phone = `${phoneName}`;
        if (phoneName) {
            const result = yield Product_service_1.ProductService.getProductByQFromDB(phone);
            res.json({
                success: true,
                message: "Product get successfully!",
                data: result,
            });
        }
        else {
            const result = yield Product_service_1.ProductService.getAllProductFromDB();
            res.json({
                success: true,
                message: "All Product get successfully!",
                data: result,
            });
        }
    }
    catch (err) {
        res.json({
            success: false,
            message: "Failed to fetch data!",
            data: err,
        });
    }
});
//get single data
const getSingleData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
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
//delete data from DB
const deleteData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Product_service_1.ProductService.deleteDataFromDB(id);
        res.json({
            success: true,
            message: "Product deleted successfully!",
            data: null,
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
//update a data
const updateData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    const result = yield Product_service_1.ProductService.updateDataToDB(id, data);
    res.json({
        success: true,
        message: "Product updated successfully!",
        data: result,
    });
});
exports.ProductController = {
    createProduct,
    getAllProduct,
    getSingleData,
    deleteData,
    updateData,
};
