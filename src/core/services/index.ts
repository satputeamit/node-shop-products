import { AddProduct, UpdateProduct } from "../../interfaces";
import { ProductModel } from "../../database/schemas/products"


export async function addProduct(productObj: AddProduct): Promise<any> {

    let msg = new ProductModel({
        name: productObj.name,
        description: productObj.description,
        amount: productObj.amount,
        pictures: productObj.pictures,
        status: 1,
        user_id:productObj.user_id
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

export async function deleteProduct(id: string, userId: string): Promise<any> {

    const data = await ProductModel.deleteOne({ _id: id , user_id:userId})
    return {
        message: "Product deleted",
        data: data,
    }

}

export async function updateProduct(id: string, productObj: UpdateProduct) {
    var query = { '_id': id ,'user_id':productObj.user_id};
    delete productObj["user_id"]

    const data = await ProductModel.updateOne(query, productObj)
    return {
        message: "Product updated",
        data: data,
    }
}
// Update, delete
