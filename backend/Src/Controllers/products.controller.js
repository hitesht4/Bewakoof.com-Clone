const express = require("express");
const productRouter = express.Router();
const ProductModel = require("../Models/mens.model");

productRouter.get("/mens", async (req, res) => {
  const products = await ProductModel.find({ type: "m" });
  res.status(200).send(products);
});

productRouter.get("/msort/:n", async (req, res) => {
  let n = req.params.n;
  console.log(n);
  if (n == 1) {
    const products = await ProductModel.find({ type: "m" }).sort({
      price: 1,
    });
    return res.status(200).send(products);
  }
  if (n == -1) {
    const products = await ProductModel.find({ type: "m" })
      .sort({ price: -1 })
      .limit(50);
    return res.status(200).send(products);
  }
});

productRouter.get("/wsort/:n", async (req, res) => {
  let n = req.params.n;
  console.log(n);
  if (n == 1) {
    const products = await ProductModel.find({ type: "w" }).sort({
      price: 1,
    });
    return res.status(200).send(products);
  }
  if (n == -1) {
    const products = await ProductModel.find({ type: "w" })
      .sort({ price: -1 })
      .limit(50);
    return res.status(200).send(products);
  }
});
productRouter.get("/mfilter/:n", async (req, res) => {
  let n = req.params.n;
  console.log(n);
  try {
    const products = await ProductModel.find({
      $and: [{ color: n }, { type: "m" }],
    });
    return res.status(200).send(products);
  } catch (e) {
    res.send({ message: e.message });
  }
});

productRouter.get("/wfilter/:n", async (req, res) => {
  let n = req.params.n;
  console.log(n);
  try {
    const products = await ProductModel.find({
      $and: [{ color: n }, { type: "w" }],
    });
    return res.status(200).send(products);
  } catch (e) {
    res.send({ message: e.message });
  }
});

productRouter.get("/womens", async (req, res) => {
  const products = await ProductModel.find({ type: "w" });
  res.status(200).send(products);
});
productRouter.get("/:_id", async (req, res) => {
  const _id = req.params._id;
  const product = await ProductModel.findOne({ _id: _id });
  res.status(200).send([product]);
});

module.exports = productRouter;
