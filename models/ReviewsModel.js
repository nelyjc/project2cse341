//ReviewsModel
const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  
  itemType: { type: String, enum: ["movie", "song", "book", "game", "show"], required: true },
  itemName: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String }
});

module.exports = mongoose.model("Review", ReviewSchema);
