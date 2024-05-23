import { Request, Response } from "express";
import { ProductService } from "./Product.service";
import { ProductSchemaValidation } from "./Product.validation";

//create data
const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const zodData = ProductSchemaValidation.parse(data);
    const result = await ProductService.createProductInDB(zodData);
    res.json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.json({
      success: false,
      message: "Failed to fetch data!",
      data: err,
    });
  }
};

//get all and query data
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const phoneName = req.query.searchTerm;
    const phone = `${phoneName}`;
    if (phoneName) {
      const result = await ProductService.getProductByQFromDB(phone);
      res.json({
        success: true,
        message: "Product get successfully!",
        data: result,
      });
    } else {
      const result = await ProductService.getAllProductFromDB();
      res.json({
        success: true,
        message: "All Product get successfully!",
        data: result,
      });
    }
  } catch (err: any) {
    res.json({
      success: false,
      message: "Failed to fetch data!",
      data: err,
    });
  }
};
//get single data
const getSingleData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductService.getSingleDataFromDB(id);
    res.json({
      success: true,
      message: "Product get successfully!",
      data: result,
    });
  } catch (err: any) {
    res.json({
      success: true,
      message: "Failed to fetch data!",
      data: err,
    });
  }
};

//delete data from DB
const deleteData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductService.deleteDataFromDB(id);
    res.json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (err: any) {
    res.json({
      success: true,
      message: "Failed to fetch data!",
      data: err,
    });
  }
};

//update a data

const updateData = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const result = await ProductService.updateDataToDB(id, data);
  res.json({
    success: true,
    message: "Product updated successfully!",
    data: result,
  });
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleData,
  deleteData,
  updateData,
};
