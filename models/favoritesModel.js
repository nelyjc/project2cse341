// models/FavoritesModel.js
const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minlength: [2, "First name must be at least 2 characters"],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    minlength: [2, "Last name must be at least 2 characters"],
    trim: true
  },
  favoriteColor: {
    type: String,
    minlength: [2, "Favorite color must be at least 2 characters"],
    default: null
  },
   favoriteSong: {
    type: String,
    required: [true, "Text is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
    favoriteMovie: {
    type: String,
    required: [true, "Text is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
    favoriteHobby: {
    type: String,
    required: [true, "Text is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  birthday: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Favorite', favoriteSchema);
