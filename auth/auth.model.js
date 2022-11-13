const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true
  },
  last_name: {
    type: String,
    required: true,
    trim: true
  },
  user_type: {
    type: String,
    required: true,
    trim: true
},
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  plan:{
    type:String,
    required:true
  },
  cardNum:{
    type:String,
    required:true,
    trim:true
  },
  csv:{
      type:Number,
      required:true
  },
  owner:{
      type:String,
      required:true,
      trim:true
  }
});

module.exports = userSchema;