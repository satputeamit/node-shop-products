import mongoose from "mongoose";

let productSchema = new mongoose.Schema({
  name: String,
  description: String,
  amount: Number,  
  pictures: [String],
  status: Number,
  user_id:String
});

export let ProductModel = mongoose.model('Products', productSchema);

