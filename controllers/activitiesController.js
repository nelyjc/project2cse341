const Activities = require('../models/ActivitiesModel');

// GET all
exports.getAllActivities = async (req, res) => {
  try {
    const activities = await Activities.find();
    res.status(200).json(activities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET one
exports.getActivityById = async (req, res) => {
  try {
    const activity = await Activities.findById(req.params.id);
    if (!activity) return res.status(404).json({ message: "Activity not found" });
    res.status(200).json(activity);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE
exports.createActivity = async (req, res) => {
  try {
    const newActivity = new Activities(req.body);
    await newActivity.save();
    res.status(201).json(newActivity);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
exports.updateActivity = async (req, res) => {
  try {
    const updated = await Activities.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Activity not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
exports.deleteActivity = async (req, res) => {
  try {
    const deleted = await Activities.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Activity not found" });
    res.status(200).json({ message: "Activity deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
