// middleware/reviewsValidation.js
const { body, validationResult } = require("express-validator");

// Validation rules for Reviews
const reviewValidationRules = [
  body("userId").notEmpty().withMessage("userId is required"),
  body("itemType")
    .isIn(["movie", "song", "book", "game", "show"])
    .withMessage("itemType must be one of: movie, song, book, game, show"),
  body("itemName").notEmpty().withMessage("itemName is required"),
  body("rating")
    .isInt({ min: 1, max: 5 })
    .withMessage("rating must be between 1 and 5"),
  body("comment").optional().isString()
];

// Shared validation handler
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  reviewValidationRules,
  validate
};
