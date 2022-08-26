const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  desc: {
    type: String,
  },
  tokenprice: {
    type: Number
  }
});

const products = mongoose.model("products", ProductSchema);

module.exports = products;