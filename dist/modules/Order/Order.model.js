"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
    },
    productId: {
        type: String,
    },
    price: {
        type: Number,
        min: 0,
    },
    quantity: {
        type: Number,
        min: 1,
    },
});
exports.Order = (0, mongoose_1.model)("Order", orderSchema);
