"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
const zod_1 = require("zod");
exports.orderSchema = zod_1.z.object({
    email: zod_1.z
        .string()
        .email({ message: "Invalid email format." })
        .nonempty({ message: "Email is required." }),
    productId: zod_1.z.string().nonempty({ message: "Product ID is required." }),
    price: zod_1.z.number().positive({ message: "Price must be a positive number." }),
    quantity: zod_1.z
        .number()
        .positive({ message: "Quantity must be a positive integer." })
        .int({ message: "Quantity must be an integer." }),
});
exports.default = exports.orderSchema;
