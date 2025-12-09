const {body} = require('express-validator');

// ACTIVITIES
const activityValidationRules = [

  body('eventName').notEmpty().withMessage('Event name is required'),
  body('eventDate').notEmpty().withMessage('Event date is required'),
  body('location').notEmpty().withMessage('Location is required'),
  body('description').isString().optional()
]

module.exports = {
  activityValidationRules
};
