import express, { Router } from "express";
import { healthData, createProduct, getProductById, getAllProduct, updateProductByIdAsync, deleteProductByIdAsync } from "../controllers/productController";

const productRouter: Router = express.Router();

productRouter.get("/health", healthData);
productRouter.get("/products/:id", getProductById);
productRouter.get("/products", getAllProduct);
productRouter.post("/products", createProduct);
productRouter.put("/products/:id", updateProductByIdAsync);
productRouter.delete("/products/:id", deleteProductByIdAsync);

export default productRouter;