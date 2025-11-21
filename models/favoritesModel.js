// models/FavoritesModel.js
const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Favorite', favoriteSchema);
