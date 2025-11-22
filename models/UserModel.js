const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3
  },
  firstName: {
    type: String,
    required: true,
    minlength: 2
  },
  lastName: { 
    type: String,
    required: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  age: {
    type: Number,
    required: true,
    min: 1,
    max: 120
  },
});

module.exports = mongoose.model('User', userSchema);
