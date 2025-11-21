const Favorite = require('../models/FavoritesModel'); 


// GET all favorites
const getAllFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.status(200).json(favorites);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET one by itemId
const getFavoriteById = async (req, res) => {
  try {
    const favorite = await Favorite.findOne({ itemId: req.params.id });

    if (!favorite) {
      return res.status(404).json({ message: "Favorite not found" });
    }

    res.status(200).json(favorite);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createFavorite = async (req, res) => {
  try {
    const favorite = new Favorite(req.body); // itemId will auto-assign
    const savedFavorite = await favorite.save();
    res.status(201).json(savedFavorite);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create favorite', error: err.message });
  }
};

// UPDATE favorite
const updateFavorite = async (req, res) => {
  try {
    const updated = await Favorite.findOneAndUpdate(
      { itemId: req.params.id },
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Favorite not found" });
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE favorite
const deleteFavorite = async (req, res) => {
  try {
    const deleted = await Favorite.findOneAndDelete({ itemId: req.params.id });

    if (!deleted) {
      return res.status(404).json({ message: "Favorite not found" });
    }

    res.status(200).json({ message: "Favorite deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllFavorites,
  getFavoriteById,
  createFavorite,
  updateFavorite,
  deleteFavorite
};
