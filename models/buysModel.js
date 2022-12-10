const mongoose = require("mongoose");

const buys = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    trim: true, //Elimina espacios en la cadena
  },
  product: [],
});

module.exports = mongoose.model("buys", buys);
