// routes/favoritesRoute.js
const express = require("express");
const router = express.Router();
const favoritesController = require("../controllers/favoritesController");
// const { favoriteValidationRules, validateFavorite } = require("../middleware/validate");
const validate = require("../middleware/validate");


// Validation rules
const favoriteValidationRules = {
  title: 'required|string|max:100',
  url: 'required|url',
};

// GET all
router.get("/", favoritesController.getAllFavorites);

// GET one
router.get("/:id", favoritesController.getFavoriteById);

// CREATE
router.post("/", validate(favoriteValidationRules), favoritesController.createFavorite);

// UPDATE
router.put("/:id", validate(favoriteValidationRules), favoritesController.updateFavorite);

// DELETE
router.delete("/:id", favoritesController.deleteFavorite);

module.exports = router;
