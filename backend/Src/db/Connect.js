const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MongoDb;

const connect = mongoose.connect(url);

module.exports = connect;
