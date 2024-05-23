import { Request, Response } from "express";
import { ProductService } from "./Product.service";
import { ProductSchemaValidation } from "./Product.validation";

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

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleData,
};
