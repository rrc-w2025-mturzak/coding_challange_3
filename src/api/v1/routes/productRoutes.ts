import express, { Router } from "express";
import { healthData, 
        createProduct, 
        getProductById, 
        getAllProduct, 
        updateProductByIdAsync, 
        deleteProductByIdAsync } from "../controllers/productController";
import { validateRequest } from "../middleware/validateRequest";
import { postSchemas } from "../validation/productValidation";

const productRouter: Router = express.Router();

productRouter.get("/health", healthData);
productRouter.get("/products", getAllProduct);
productRouter.get("/products/:id", validateRequest(postSchemas.getById), getProductById);
productRouter.post("/products", validateRequest(postSchemas.create), createProduct);
productRouter.put("/products/:id", validateRequest(postSchemas.update), updateProductByIdAsync);
productRouter.delete("/products/:id", validateRequest(postSchemas.delete), deleteProductByIdAsync);

export default productRouter;