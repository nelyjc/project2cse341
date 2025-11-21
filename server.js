// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./data/connection');
const favoritesRoutes = require('./routes/favoritesRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connect
connectDB();
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use('/favorites', favoritesRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Server running on port ${port}`));
