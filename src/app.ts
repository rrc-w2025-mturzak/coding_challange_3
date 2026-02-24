import express, {Express} from "express";
import productRouter from "./api/v1/routes/productRoutes";

const app: Express = express();

app.use(express.json());

app.use("/api/v1/", productRouter);

export default app;
