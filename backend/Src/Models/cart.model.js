const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  images: { type: Array, required: true },
  title: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  actualPrice: { type: Number, required: true },
  color: { type: String, required: true },
  totalPrice: { type: Number },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const cartModel = mongoose.model("cart", cartSchema);

module.exports = cartModel;
