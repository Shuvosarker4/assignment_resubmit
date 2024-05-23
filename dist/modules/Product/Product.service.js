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
exports.ProductService = void 0;
const Product_model_1 = require("./Product.model");
const createProductInDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product_model_1.ProductModel.create(product);
    return result;
});
const getAllProductFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product_model_1.ProductModel.find();
    return result;
});
const getSingleDataFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product_model_1.ProductModel.findOne({ _id: id });
    return result;
});
const getProductByQFromDB = (phoneName) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product_model_1.ProductModel.find({ name: phoneName });
    return result;
});
const deleteDataFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product_model_1.ProductModel.findByIdAndDelete(id);
    return result;
});
const updateDataToDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product_model_1.ProductModel.updateOne({ _id: id }, data);
    if (result.modifiedCount) {
        const result = yield Product_model_1.ProductModel.findOne({ _id: id });
        return result;
    }
});
exports.ProductService = {
    createProductInDB,
    getAllProductFromDB,
    getSingleDataFromDB,
    getProductByQFromDB,
    deleteDataFromDB,
    updateDataToDB,
};
