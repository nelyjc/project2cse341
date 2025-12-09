const mongoose = require('mongoose');

const ActivitiesSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  eventName: { type: String, required: true },
  eventDate: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String }
});

module.exports = mongoose.model('Activities', ActivitiesSchema);
