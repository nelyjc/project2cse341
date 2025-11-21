// middleware favoriteValidationRules.js
// This file defines the validation rules for the Favorite model

module.exports = {
  firstName: 'required|string',
  lastName: 'required|string',
  favoriteFood: 'string',
  favoriteColor: 'string',
  favoriteSong: 'string',
  favoriteMovie: 'string',
  favoriteHobby: 'string',
  birthday: 'date'
};
