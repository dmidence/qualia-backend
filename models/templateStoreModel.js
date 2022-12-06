const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({
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
  type: {
    type: String,
    required: true,
    trim: true,
  },
  html: {
    type: String,
    required: true,
    trim: true,
  },
  css: {
    type: String,
    required: false,
    trim: true,
  },
});

module.exports = mongoose.model("template", templateSchema);
