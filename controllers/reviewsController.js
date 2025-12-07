const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllReviews = async (req, res) => {
  try {
    const result = await mongodb.getDatabase().db()
      .collection('reviews')
      .find({ userId: req.user.id });

    const reviews = await result.toArray();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews", error });
  }
};

const getReviewById = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);

    const review = await mongodb.getDatabase().db()
      .collection('reviews')
      .findOne({ _id: id, userId: req.user.id });

    if (!review)
      return res.status(404).json({ message: "Review not found" });

    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: "Error fetching review", error });
  }
};

const createReview = async (req, res) => {
  try {
    const review = {
      ...req.body,
      userId: req.user.id
    };

    const response = await mongodb.getDatabase().db()
      .collection('reviews')
      .insertOne(review);

    res.status(201).json({ message: "Review created", id: response.insertedId });
  } catch (error) {
    res.status(500).json({ message: "Error creating review", error });
  }
};

const updateReview = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);

    const updated = {
      ...req.body,
      userId: req.user.id
    };

    const response = await mongodb.getDatabase().db()
      .collection('reviews')
      .updateOne({ _id: id, userId: req.user.id }, { $set: updated });

    if (response.matchedCount === 0)
      return res.status(404).json({ message: "Review not found" });

    res.status(200).json({ message: "Review updated" });
  } catch (error) {
    res.status(500).json({ message: "Error updating review", error });
  }
};

const deleteReview = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);

    const response = await mongodb.getDatabase().db()
      .collection('reviews')
      .deleteOne({ _id: id, userId: req.user.id });

    if (response.deletedCount === 0)
      return res.status(404).json({ message: "Review not found" });

    res.status(200).json({ message: "Review deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting review", error });
  }
};

module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview
};
