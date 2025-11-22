const express = require('express');
const router = express.Router();

const validate = require('../middleware/validate');

const favoritesController = require('../controllers/favoritesController');
const validateFavorite = require('../middleware/favoriteValidationRules');
const favoriteValidationRules = require('../middleware/favoriteValidationRules');

// GET all favorites
router.get('/', favoritesController.getAllFavorites);

// GET one favorite by itemId (_id)
router.get('/:id', favoritesController.getFavoriteById);

// CREATE a new favorite
router.post('/', validate(favoriteValidationRules), favoritesController.createFavorite);

// UPDATE favorite by itemId (_id)
router.put('/:id', validate(favoriteValidationRules), favoritesController.updateFavorite);

// DELETE favorite by itemId (_id)
router.delete('/:id', favoritesController.deleteFavorite);

module.exports = router;
