const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    first_name : {
      type: String,
      required: true
    },
  
    last_name : {
      type: String,
    },
  
    email: {
      type: String,
      required: true,
      unique: true
    },
  
    gender: {
      type: String,
      required: true
    },
  
    job_title: {
      type: String
    }
  }, {timestamps : true})

  const user = mongoose.model('User', userSchema);

  module.exports = user;

  