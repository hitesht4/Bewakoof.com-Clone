require("dotenv").config();
const secret_key = process.env.SECRET_KEY;

const express = require("express");
const userRouter = express.Router();
const userModel = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const argon = require("argon2");

userRouter.get("/", async (req, res) => {
  const users = await userModel.find();
  res.send(users);
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await userModel.findOne({ email: email });
    if (user) {
      const verification = await argon.verify(user.password, password);

      if (verification) {
        const token = jwt.sign(
          { id: user._id, username: user.email },
          secret_key,
          {
            expiresIn: "1 day",
          }
        );
        return res
          .status(201)
          .send({ message: "Logged In Successfully", Token: token });
      }
      return res.status(401).send({ message: "Incorrect Details" });
    } else {
      const hash = await argon.hash(password);
      let newuser = new userModel({ email: email, password: hash });
      await newuser.save();
      const token = jwt.sign(
        { id: newuser._id, username: newuser.email },
        "SECRET1234",
        {
          expiresIn: "1 day",
        }
      );
      return res
        .status(201)
        .send({ message: "User Created Successfully", Token: token });
    }
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

module.exports = userRouter;
