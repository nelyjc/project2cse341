// models/FavoritesModel.js
const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  favoriteFood: { type: String },
  favoriteColor: { type: String },
  favoriteSong: { type: String },
  favoriteMovie: { type: String },
  favoriteHobby: { type: String },
  birthday: { type: Date }
});

module.exports = mongoose.model('Favorite', favoriteSchema);
