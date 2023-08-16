import mongoose from "mongoose";

const server = '127.0.0.1:27017';
const database = 'node_shop_products';


export const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://${server}/${database}`)

  } catch (err: any) {
    console.log(err)
  }
}

