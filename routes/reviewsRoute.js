// routes/reviewsRoute.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/reviewsController');
const { reviewValidationRules, validate } = require('../middleware/activitiesValidation');
const { isAuthenticated } = require('../middleware/authenticate');

// GET all reviews
router.get('/', controller.getAllReviews);

// GET one review by ID
router.get('/:id', controller.getReviewById);

// CREATE review
router.post(
  '/',
  isAuthenticated,
  reviewValidationRules,
  validate,
  controller.createReview
);

// UPDATE review
router.put(
  '/:id',
  isAuthenticated,
  reviewValidationRules,
  validate,
  controller.updateReview
);

// DELETE review
router.delete('/:id', isAuthenticated, controller.deleteReview);

module.exports = router;
