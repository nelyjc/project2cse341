// // server.js
// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// // const mongoose = require('mongoose');
// const cors = require('cors');
// const connectDB = require('./data/connection');
// const favoritesRoutes = require('./routes/favoritesRoute');
// const swaggerRoute = require('./swagger');
// const swaggerDocument = require('./swagger.json');
// const swaggerUi = require('swagger-ui-express');
// const swaggerJsDoc = require('swagger-jsdoc');

// const { ServerApiVersion } = require("mongodb");

// const app = express();

// // MongoDB connect
// connectDB();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());


// //swagger
// const swaggerOptions = {
//     definition: {
//     openapi: '3.0.0',
//     info: {
//       title: 'Favorites API',
//       version: '1.0.0',
//       description: 'API documentation for CSE341 favorites project',
//     },
//     servers: [
//       {
//         url: 'http://localhost:7000',
//         description: 'Server URL',
//       },
//     ],
//   },
//   apis: ['./routes/favoritesRoute.js'], 
// };
// // Generate Swagger documentation   
// // const swaggerDocs = swaggerJsDoc(swaggerOptions);
// // Serve Swagger UI
// app.use('/', swaggerRoute);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// // // MongoDB connection
// // mongoose.connect(process.env.MONGO_URI)
// //   .then(() => console.log("MongoDB connected"))
// //   .catch((err) => console.error(err));

//   // Routes
// app.use('/favorites', favoritesRoutes);

// // Global error handler for uncaught exceptions
// process.on('uncaughtException', (err) => {
//   console.error('Caught Exception:', err);
//   process.exit(1);
// });
// // Start the server
// const port = process.env.PORT || 7000;
// app.listen(port, () => console.log(`Server running on port ${port}`));
// server.js round 2// server.js
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
