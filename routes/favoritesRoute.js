// routes/favoritesRoute.js
const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favoritesController');
const validate = require('../middleware/validate');
const favoriteValidationRules = require('../middleware/favoriteValidationRules');

// CREATE a new favorite
router.post(
  '/',
  validate(favoriteValidationRules),
  favoritesController.createFavorite
);

// GET all favorites
router.get('/', favoritesController.getAllFavorites);

// GET a single favorite by itemId
router.get('/:id', favoritesController.getFavoriteById);

// UPDATE a favorite by itemId
router.put(
  '/:id',
  validate(favoriteValidationRules),
  favoritesController.updateFavorite
);

// DELETE a favorite by itemId
router.delete('/:id', favoritesController.deleteFavorite);

module.exports = router;
