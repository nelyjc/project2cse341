// controllers/favoritesController.js
const FavoriteThings = require('../models/favoriteThingsModel');
const ObjectId = require('mongoose').Types.ObjectId;

// GET all
const getAll = async (req, res) => {
  try {
    const people = await FavoriteThings.find();
    res.status(200).json(people);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET one
const getOne = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).json({ error: 'Invalid ID format' });

  try {
    const person = await FavoriteThings.findById(req.params.id);
    if (!person)
      return res.status(404).json({ message: 'Person not found' });
    res.status(200).json(person);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE
const createPerson = async (req, res) => {
  try {
    const person = new FavoriteThings(req.body);
    const result = await person.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE
const updatePerson = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).json({ error: 'Invalid ID format' });

  try {
    const updated = await FavoriteThings.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated)
      return res.status(404).json({ message: 'Person not found' });

    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
const deletePerson = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).json({ error: 'Invalid ID format' });

  try {
    const deleted = await FavoriteThings.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: 'Person not found' });

    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAll, getOne, createPerson, updatePerson, deletePerson };
