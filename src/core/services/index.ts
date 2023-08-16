import { AddProduct } from "../../interfaces";
import { ProductModel } from "../../database/schemas/products"


export async function addProduct(productObj: AddProduct): Promise<any> {
    
    let msg = new ProductModel({
        name: productObj.name,
        description: productObj.description,
        amount: productObj.amount,       
        pictures: productObj.pictures,
        status:1
    });

    let data = await msg.save()   
    return {
        message: "Product added successfully...",
        data: data,
    };   

}

export async function getProducts():Promise<any> {
    let products = await ProductModel.find()
    return{
        message: "Successful",
        data: products,
    }

}


// Update, delete
