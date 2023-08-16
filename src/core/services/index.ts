import { AddProduct } from "../../interfaces";
import { ProductModel } from "../../database/schemas/products"


export async function addProduct(productObj: AddProduct): Promise<any> {
    console.log(productObj)
    // const product = await knex("products").insert(productObj).returning("*");
    let msg = new ProductModel({
        name: productObj.name,
        description: productObj.description,
        amount: productObj.amount,       
        pictures: productObj.pictures,
        status:1
    });

    let data = await msg.save()
    console.log("===>", data);
    return {
        message: "Product added successfully...",
        data: data,
    };
    //   msg
    //     .save()
    //     .then((doc) => {
    //       console.log(doc);
    //       return {
    //         message: "Product added successfully...",
    //         data: doc,
    //     };
    //     })
    //     .catch((err) => {
    //         return {
    //             message: "Product added successfully...",
    //             error: err,
    //         };
    //     });


}


// Update, delete
