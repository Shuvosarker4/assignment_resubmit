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

const getProductByQFromDB = async (phoneName: string) => {
  const result = await ProductModel.find({ name: phoneName });
  return result;
};

const deleteDataFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};

const updateDataToDB = async (id: string, data: TProduct) => {
  const result = await ProductModel.updateOne({ _id: id }, data);
  if (result.modifiedCount) {
    const result = await ProductModel.findOne({ _id: id });
    return result;
  }
};

export const ProductService = {
  createProductInDB,
  getAllProductFromDB,
  getSingleDataFromDB,
  getProductByQFromDB,
  deleteDataFromDB,
  updateDataToDB,
};
