import { addProduct, getProductById, getProducts, updateProducts, deleteProduct } from "../repositories/firestoreRepository";
import { ProductReponse } from "../models/productResponse";
import { ProductCreateRequest } from "../models/productCreateRequestModel";
import { ProductDTO } from "../models/productDTO";

export interface Ticket {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    priority: string;
    status: string
}

export const createNewProduct =  async (item: ProductCreateRequest): Promise<string> => {
    return await addProduct(item); 
}

export const getProductByIdAsync = async (id: string): Promise<ProductReponse> => {
    let entity = await getProductById(id);
    return {
        id: entity?.id,
        name: entity?.name
    };
}

export const getAllProducts = async (): Promise<Array<ProductDTO> | undefined> => {
    return await getProducts();
}

export const updateProductById = async (id: string, item: ProductCreateRequest): Promise<void> => {
    await updateProducts(id, item);
    return;
}

export const deleteProductById = async (id: string): Promise<void> => {
    await deleteProduct(id)
}