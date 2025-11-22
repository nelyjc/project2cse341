// middleware favoriteValidationRules.js
// This file defines the validation rules for the Favorite model

module.exports = {
  firstName: "required|string|min:2",
  lastName: "required|string|min:2",
  favoriteFood: "required|string",
  favoriteColor: "required|string",
  favoriteSong: "required|string",
  favoriteMovie: "required|string",
  favoriteHobby: "required|string",
  birthday: "date"
};
