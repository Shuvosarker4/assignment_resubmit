import z from "zod";

const VariantSchemaValidation = z.object({
  type: z.string().nonempty("Type is required"),
  value: z.string().nonempty("Value is required"),
});

const InventorySchemaValidation = z.object({
  quantity: z.number().min(0, "Quantity must be a positive number"),
  inStock: z.boolean(),
});

export const ProductSchemaValidation = z.object({
  name: z.string().nonempty("Name is required"),
  description: z.string().nonempty("Description is required"),
  price: z.number().positive("Price must be a positive number"),
  category: z.string().nonempty("Category is required"),
  tags: z.array(z.string()),
  variants: z.array(VariantSchemaValidation).nonempty("Variants is required"),
  inventory: InventorySchemaValidation,
});
