const express = require("express");
const cartRouter = express.Router();
const jwt = require("jsonwebtoken");
const cartModel = require("../Models/cart.model");

const authMiddleware = async (req, res, next) => {
  if (!req.headers["token"]) {
    return res.status(401).send("Operation not allowed");
  }
  const token = req.headers["token"].split(":");
  const user = jwt.decode(token[0]);

  if (user) {
    req.token = token[0];
    next();
  } else {
    res.status(401).send("Operation not allowed");
  }
};

cartRouter.use(authMiddleware);

//get route;
cartRouter.get("/", async (req, res) => {
  try {
    // console.log(req.token);
    const auth = jwt.decode(req.token);
    const user = auth.id;
    console.log(user);
    const items = await cartModel.find({ author: user }).populate("author");
    res.send(items);
  } catch (e) {
    console.log(e.message);
    res.send(e.message);
  }
});

//post route;
cartRouter.post("/", async (req, res) => {
  const body = req.body;
  try {
    const auth = jwt.decode(req.token);
    const item = await cartModel.create({ ...body, author: auth.id });

    res.send({ message: "Item Added successfully", item: item });
  } catch (e) {
    console.log(e.message);
    res.send({ message: e.message });
  }
});

cartRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const auth = jwt.decode(req.token);
  const user = auth.id;
  try {
    await cartModel.deleteOne({ $and: [{ _id: id }, { author: user }] });
    res.send({ message: "Deleted Successfully" });
  } catch (e) {
    console.log(e.message);
  }
});

cartRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  const qty = req.body.qty;
  const auth = jwt.decode(req.token);
  const user = auth.id;
  try {
    await cartModel.updateOne(
      { $and: [{ _id: id }, { author: user }] },
      { $set: { qty: qty } }
    );
    const upDatedItem = await cartModel.findOne({ _id: id });
    res.send({
      message: "Updated Successfully",
      item: upDatedItem,
    });
  } catch (e) {
    console.log(e);
    res.send({ message: e.message });
  }
});

module.exports = cartRouter;
