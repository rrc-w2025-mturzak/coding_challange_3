import Joi from "joi";

// Post operation schemas organized by request part
export const postSchemas = {
    // POST /product - Create new post
    create: {
        body: Joi.object({
            name: Joi.string().required().messages({
                "any.required": "Product name is required",
                "string.empty": "Product name cannot be empty",
            }),
            sku: Joi.string().required().messages({
                "any.required": "sku is required",
                "string.empty": "sku cannot be empty",
            }),
            quantity: Joi.number().required().messages({
                "any.required": "quantity is required",
                "string.empty": "quantity cannot be empty",
            }),
            price: Joi.number().required().messages({
                "any.required": "price is required",
                "string.empty": "price cannot be empty",
            }),
            category: Joi.string().required().messages({
                "any.required": "category is required",
                "string.empty": "category cannot be empty",
            }),
        }),
    },

    // GET /product/:id - Get single post
    getById: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Product ID is required",
                "string.empty": "Product ID cannot be empty",
            }),
        }),
        query: Joi.object({
            include: Joi.string().valid("comments", "author").optional(),
        }),
    },

    // PUT /product/:id - Update post
    update: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Product ID is required",
                "string.empty": "Product ID cannot be empty",
            }),
        }),
        body: Joi.object({
             name: Joi.string().required().messages({
                "any.required": "Product name is required",
                "string.empty": "Product name cannot be empty",
            }),
            sku: Joi.string().optional().messages({
                "any.required": "sku is required",
                "string.empty": "sku cannot be empty",
            }),
            quantity: Joi.number().optional().messages({
                "any.required": "quantity is required",
                "string.empty": "quantity cannot be empty",
            }),
            price: Joi.number().optional().messages({
                "any.required": "price is required",
                "string.empty": "price cannot be empty",
            }),
            category: Joi.string().optional().messages({
                "any.required": "category is required",
                "string.empty": "category cannot be empty",
            }),
        }),
    },

    // DELETE /product/:id - Delete post
    delete: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Product ID is required",
                "string.empty": "Product ID cannot be empty",
            }),
        }),
    },
};