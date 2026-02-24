export interface Product {
    id: string;
    name: string;
    sku: string;
    quantity: number;
    price: number;
    category: string;
    createdAt: Date;
    updatedAt: Date;
}

// id	string	Unique identifier (Firestore doc ID)
// name	string	Product name
// sku	string	Stock keeping unit (unique identifier)
// quantity	number	Current stock quantity
// price	number	Price per unit
// category	string	Product category
// createdAt	Date	Timestamp of creation
// updatedAt	Date