import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/Product/Product.routes";

const app = express();
//parser
app.use(express.json());
//application routes
app.use("/api/products", ProductRoutes);

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
