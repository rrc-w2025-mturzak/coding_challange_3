import { db } from "../config/firebaseConfig";
import { DocumentReference, QuerySnapshot } from "firebase-admin/firestore";
import { Product } from "../models/productModel";
import { ProductCreateRequest } from "../models/productCreateRequestModel";
import { ProductDTO } from "../models/productDTO";

export const addProduct = async (item:ProductCreateRequest): Promise<string> => {

    const docRef: DocumentReference = db.collection("products").doc();

    const itemEntity: Product = {
        name: item.name,
        sku: item.sku,
        quantity: item.quantity,
        price: item.price,
        category: item.category,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    await docRef.set(itemEntity);
    return docRef.id;
};

export const getProductById = async (id: string): Promise<ProductDTO | undefined> => {
    const docRef: DocumentReference = db.collection("products").doc(id);

    const doc = await docRef.get();

    if (doc.exists) {
        let data = doc.data();

        return {
            id: doc.id,
            name: data!.name,
            sku: data!.sku,
            quantity: data!.quantity,
            price: data!.price,
            category: data!.category,
            createdAt: data!. createdAt,
            updatedAt: data!.updatedAt

        }
    } else {
        console.log("No such product!");
    }
};

export const getProducts = async (): Promise<Array<ProductDTO> | undefined> => {

    const snapshot: QuerySnapshot = await db.collection("products").get();

    const products: ProductDTO[] = []
    snapshot.forEach((doc) => {
        let data = doc.data();
        products.push({
            id: doc.id,
            name: data!.name,
            sku: data!.sku,
            quantity: data!.quantity,
            price: data!.price,
            category: data!.category,
            createdAt: data!. createdAt,
            updatedAt: data!.updatedAt
        });
    });

    return products;
};

export const updateProducts = async (id: string , item: ProductCreateRequest): Promise<void> => {

    const docRef: DocumentReference = db.collection("products").doc(id);

    await docRef.update({
        name: item.name,
        sku: item.sku,
        quantity: item.quantity,
        price: item.price,
        category: item.category,
        updatedAt: new Date(),
    });
    return;
};

export const deleteProduct = async (id: string): Promise<void> => {

    const docRef: DocumentReference = db.collection("products").doc(id);

    await docRef.delete();
};
