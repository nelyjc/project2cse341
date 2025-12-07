const { body, validationResult } = require('express-validator');

// ACTIVITIES
const activityValidationRules = [
  body('userId').notEmpty().withMessage('userId is required'),
  body('eventName').notEmpty().withMessage('Event name is required'),
  body('eventDate').notEmpty().withMessage('Event date is required'),
  body('location').notEmpty().withMessage('Location is required'),
  body('description').isString().optional()
];

// REVIEWS
const reviewValidationRules = [
  body('userId').notEmpty().withMessage('userId is required'),
  body('itemType').isIn(['movie', 'song', 'book', 'game', 'show'])
    .withMessage('Invalid itemType'),
  body('itemName').notEmpty().withMessage('Item name is required'),
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be 1–5'),
  body('comment').isString().optional()
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  activityValidationRules,
  reviewValidationRules,
  validate
};
