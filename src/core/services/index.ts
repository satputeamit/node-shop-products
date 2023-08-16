import { AddProduct } from "../../interfaces";
import { ProductModel } from "../../database/schemas/products"


export async function addProduct(productObj: AddProduct): Promise<any> {

    let msg = new ProductModel({
        name: productObj.name,
        description: productObj.description,
        amount: productObj.amount,
        pictures: productObj.pictures,
        status: 1
    });

    let data = await msg.save()
    return {
        message: "Product added successfully...",
        data: data,
    };

}

export async function getProducts(): Promise<any> {
    var products = await ProductModel.find()
    return {
        message: "Successful",
        data: products,
    }

}

export async function deleteProduct(id: string): Promise<any> {

    const data = await ProductModel.deleteOne({ _id: id })
    return {
        message: "Product deleted",
        data: data,
    }

}

export async function updateProduct(id: string, productObj: AddProduct) {
    var query = { '_id': id };

    const data = await ProductModel.updateOne(query, productObj)
    return {
        message: "Product updated",
        data: data,
    }
}
// Update, delete
