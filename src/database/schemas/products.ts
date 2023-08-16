import mongoose from "mongoose";

let productSchema = new mongoose.Schema({
  name: String,
  description: String,
  amount: Number,  
  pictures: [String],
  status: Number
});

export let ProductModel = mongoose.model('Products', productSchema);

