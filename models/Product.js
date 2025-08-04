const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: String,
  paragraph: String,
  rating: Number,
  price: Number,
  image: String, // store relative image URL like '/images/burger-11.jpg'
});

module.exports = mongoose.model("Product", ProductSchema);
