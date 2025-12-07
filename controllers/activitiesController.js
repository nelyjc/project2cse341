const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllActivities = async (req, res) => {
  try {
    const result = await mongodb.getDatabase().db()
      .collection('activities')
      .find({ userId: req.user.id });

    const activities = await result.toArray();
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching activities", error });
  }
};

const getActivityById = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);

    const activity = await mongodb.getDatabase().db()
      .collection('activities')
      .findOne({ _id: id, userId: req.user.id });

    if (!activity)
      return res.status(404).json({ message: "Activity not found" });

    res.status(200).json(activity);
  } catch (error) {
    res.status(500).json({ message: "Error fetching activity", error });
  }
};

const createActivity = async (req, res) => {
  try {
    const activity = {
      userId: req.user.id,   
      eventName: req.body.eventName,
      eventDate: req.body.eventDate,
      location: req.body.location,
      description: req.body.description
    };

    const result = await mongodb.getDatabase().db().collection("activities").insertOne(activity);

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateActivity = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);

    const updated = {
      ...req.body,
      userId: req.user.id
    };

    const response = await mongodb.getDatabase().db()
      .collection('activities')
      .updateOne({ _id: id, userId: req.user.id }, { $set: updated });

    if (response.matchedCount === 0)
      return res.status(404).json({ message: "Activity not found" });

    res.status(200).json({ message: "Activity updated" });
  } catch (error) {
    res.status(500).json({ message: "Error updating activity", error });
  }
};

const deleteActivity = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);

    const response = await mongodb.getDatabase().db()
      .collection('activities')
      .deleteOne({ _id: id, userId: req.user.id });

    if (response.deletedCount === 0)
      return res.status(404).json({ message: "Activity not found" });

    res.status(200).json({ message: "Activity deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting activity", error });
  }
};

module.exports = {
  getAllActivities,
  getActivityById,
  createActivity,
  updateActivity,
  deleteActivity
};
