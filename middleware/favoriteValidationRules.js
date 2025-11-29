// middleware favoriteValidationRules.js
// This file defines the validation rules for the Favorite model
const { body } = require('express-validator');

const favoriteValidationRules = [
  body('firstName')
    .notEmpty().withMessage('First name is required')
    .isString().withMessage('First name must be a string')
    .isLength({ min: 2 }).withMessage('First name must be at least 2 characters'),

  body('lastName')
    .notEmpty().withMessage('Last name is required')
    .isString().withMessage('Last name must be a string')
    .isLength({ min: 2 }).withMessage('Last name must be at least 2 characters'),

  body('favoriteFood')
    .notEmpty().withMessage('Favorite food is required'),

  body('favoriteColor')
    .notEmpty().withMessage('Favorite color is required'),

  body('favoriteSong')
    .notEmpty().withMessage('Favorite song is required'),

  body('favoriteMovie')
    .notEmpty().withMessage('Favorite movie is required'),

  body('favoriteHobby')
    .notEmpty().withMessage('Favorite hobby is required'),

  body('birthday')
    .optional()
    .isISO8601().withMessage('Birthday must be a valid date')
];

module.exports = favoriteValidationRules;
