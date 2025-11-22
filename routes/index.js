//routes/index.js
// cse341/routes/index.js
const express = require('express');
const router = express.Router();
// const contactControllers = require('../controllers/favoritesController');
// const favoriteValidationRules = require('../middleware/favoriteValidationRules');
router.use('/', require('./swagger')); // Swagger documentation route

// Root route
router.get('/', (req, res) => {
  //#swagger.tags = ['Welcome to the API']
  res.send('Welcome to the favorite API!');
});
router.use('/favorites', require('./favoritesRoute'));


module.exports = router;