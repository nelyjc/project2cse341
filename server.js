// // server.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./data/connection');
const favoritesRoutes = require('./routes/favoritesRoute');
const userRoute = require('./routes/userRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // replaces body-parser
app.use(cors());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Favorites API');
});

// Routes
app.use('/favorites', favoritesRoutes);
app.use('/user', userRoute);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



// Global error handler for uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Caught Exception:', err);
  process.exit(1);
});

// Start server
const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
