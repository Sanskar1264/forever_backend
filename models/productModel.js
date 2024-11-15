import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
//   price: { type: Number, required: true },
  price: { type: Number},
  // image: { type: Array, required: true },
  image: { type: Array },
  //   category: { type: String, required: true },
  category: { type: String },
  //   subCategory: { type: String, required: true },
  subCategory: { type: String },
  //   sizes: { type: Array, required: true },
  sizes: { type: Array },
  bestseller: { type: Boolean },
  //   date: { type: Number, required: true },
  date: { type: Number },
});

const productModel  = mongoose.models.product || mongoose.model("product",productSchema);

export default productModel