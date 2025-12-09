// middleware/reviewsValidation.js
const { body } = require("express-validator");

// Validation rules for Reviews
const reviewValidationRules = [
  body("itemType")
    .isIn(["movie", "song", "book", "game", "show"])
    .withMessage("itemType must be one of: movie, song, book, game, show"),
  body("itemName").notEmpty().withMessage("itemName is required"),
  body("rating")
    .isInt({ min: 1, max: 5 })
    .withMessage("rating must be between 1 and 5"),
  body("comment").optional().isString()
]

module.exports = {
  reviewValidationRules
};
