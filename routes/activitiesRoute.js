// routes/activitiesRoute.js
const express = require('express');
const router = express.Router();

const activitiesController = require('../controllers/activitiesController');
const { activityValidationRules, validate } = require('../middleware/activitiesValidation');
const { isAuthenticated } = require('../middleware/authenticate');  // <-- IMPORTANT

// GET all activities
router.get('/', isAuthenticated, activitiesController.getAllActivities);

// GET a single activity
router.get('/:id', activitiesController.getActivityById);

// CREATE activity
router.post(
  '/',
  isAuthenticated,
  activityValidationRules,
  validate,
  activitiesController.createActivity
);

// UPDATE activity
router.put(
  '/:id',
  isAuthenticated,
  activityValidationRules,
  validate,
  activitiesController.updateActivity
);

// DELETE activity
router.delete('/:id', isAuthenticated, activitiesController.deleteActivity);

module.exports = router;
