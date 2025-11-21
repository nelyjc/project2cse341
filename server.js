// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./data/connection');
const favoriteRoutes = require('./routes/favoriteThingsRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/favorite-things-swagger.json');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/favorites', favoriteRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
