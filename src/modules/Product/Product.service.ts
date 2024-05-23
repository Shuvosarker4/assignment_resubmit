import { TProduct } from "./Product.interface";
import { ProductModel } from "./Product.model";

const createProductInDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleDataFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};

export const ProductService = {
  createProductInDB,
  getAllProductFromDB,
  getSingleDataFromDB,
};
