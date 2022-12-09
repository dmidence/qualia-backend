const mongoose = require("mongoose");

const htmlTemplateSchema = new mongoose.Schema({
  name: {
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

module.exports = mongoose.model("htmlTemplate", htmlTemplateSchema);
