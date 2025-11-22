const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const validate = require('../middleware/validate');
const userValidationRules = require('../middleware/userValidationRules');


router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);

router.post('/', validate(userValidationRules), userController.createUser);

router.put('/:id', validate(userValidationRules), userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;
