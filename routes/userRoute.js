// routes/userRoute.js
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const { isAuthenticated } = require('../middleware/authenticate');
const userValidationRules = require('../middleware/userValidationRules');

// GET all users (no auth required unless you want it)
router.get('/', userController.getAllUsers);

// GET one user
router.get('/:id', userController.getUserById);

// CREATE user (authenticated + validated)
router.post('/', isAuthenticated, userValidationRules, userController.createUser);

// UPDATE user
router.put('/:id', isAuthenticated, userValidationRules, userController.updateUser);

// DELETE user
router.delete('/:id', isAuthenticated, userController.deleteUser);

module.exports = router;
