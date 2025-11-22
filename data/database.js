// data/database.js
require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI; 
if (!uri) throw new Error('MongoDB URI is not defined in .env');

let db;

const initDb = async () => {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db(); // default DB from URI
    console.log('✅ MongoDB native driver connected');
  } catch (err) {
    console.error('❌ Failed to connect with native driver:', err);
  }
};

const getDb = () => {
  if (!db) throw new Error('Database not initialized');
  return db;
};

module.exports = { initDb, getDb };