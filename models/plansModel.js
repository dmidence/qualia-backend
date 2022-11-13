const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true//Elimina espacios en la cadena
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  saveData: {
    type: Number,
    required: true,
  },
  host: {
    type: Boolean,
    required: true,
  },
  templatesNumber:{
      type:Number,
      required:true,
  },
  pagesNumber:{
      type:Number,
      required:true,
  },
  price:{
      type:Number,
      required:true
  },
  storesNumber:{
      type:Number,
      required:true,
      default:0
  },
  dateCreated:{
    type:Date,
    default:Date.now
  }
});

module.exports = mongoose.model('plans',planSchema);