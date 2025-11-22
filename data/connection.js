//data/connection.js
require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(uri); // Mongoose uses defaults; no deprecated options needed
        console.log('✅ MongoDB connected');
    } catch (err) {
        console.error('❌ Failed to connect to MongoDB:', err);
        process.exit(1); // Stop server if DB connection fails
    }
};

module.exports = connectDB;
