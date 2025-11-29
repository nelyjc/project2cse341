const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favoritesController');
const { isAuthenticated } = require('../middleware/authenticate');
const favoriteValidationRules = require('../middleware/favoriteValidationRules'); 

// GET all favorites (protected)
router.get('/', isAuthenticated, favoritesController.getAllFavorites);

// GET one favorite by ID (protected)
router.get('/:id', isAuthenticated, favoritesController.getFavoriteById);

// CREATE a new favorite (protected + validation)
router.post('/', isAuthenticated, favoriteValidationRules, favoritesController.createFavorite);

// UPDATE favorite by ID (protected + validation)
router.put('/:id', isAuthenticated, favoriteValidationRules, favoritesController.updateFavorite);

// DELETE favorite by ID (protected)
router.delete('/:id', isAuthenticated, favoritesController.deleteFavorite);

module.exports = router;
