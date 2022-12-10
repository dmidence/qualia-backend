const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  storeId: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: { type: Number, required: true },
  img: { type: String, required: true, trim: true },
});

module.exports = mongoose.model("products", productSchema);
