import { z } from "zod";

export const orderSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email format." })
    .nonempty({ message: "Email is required." }),
  productId: z.string().nonempty({ message: "Product ID is required." }),
  price: z.number().positive({ message: "Price must be a positive number." }),
  quantity: z
    .number()
    .positive({ message: "Quantity must be a positive integer." })
    .int({ message: "Quantity must be an integer." }),
});

export default orderSchema;
