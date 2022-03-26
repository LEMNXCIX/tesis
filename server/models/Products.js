const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
    },
    price: {
      type: Number,
      required: true,
    },
    cantidad: {
      type: Number,
      required: true,
    },
    inStock: {type: Boolean, default: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", ProductsSchema);
