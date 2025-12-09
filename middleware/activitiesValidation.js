// middleware/activitiesValidation.js
const { body, validationResult } = require("express-validator");

// Validation rules for Activities
const activityValidationRules = [
  body("eventName").notEmpty().withMessage("eventName is required"),
  body("eventDate").notEmpty().withMessage("eventDate is required"),
  body("location").notEmpty().withMessage("location is required"),
  body("description").optional().isString()
];

// Validate middleware
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  activityValidationRules,
  validate
};
