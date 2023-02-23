require("dotenv").config();
const port = process.env.PORT || 5000;
const express = require("express");
const connect = require("./Src/db/Connect");
const cors = require("cors");
const cartRouter = require("./Src/Controllers/cart.controller.js");
const userRouter = require("./Src/Controllers/user.controller");
const productRouter = require("./Src/Controllers/products.controller");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/cart", cartRouter);
app.use("/prod", productRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my app");
});
console.log();
app.listen(port, async () => {
  await connect;
  console.log("Listening to port 5000");
});
