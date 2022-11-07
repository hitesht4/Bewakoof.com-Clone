const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: { type: Number },
  images: Array,
  title: { type: String },
  price: { type: String },
  actualPrice: { type: String },
  off: { type: String },
  color: { type: String },
  ratings: { type: String },
  type: { type: String, enum: ["m", "w"] },
});

const ProductModel = new mongoose.model("product", productSchema);

module.exports = ProductModel;
