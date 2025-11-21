// routes/favoritesRoute.js
const router = require('express').Router();
const controller = require('../controllers/favoriteThingsController');
const validate = require('../middleware/validate');

const rules = {
  firstName: 'required|string',
  lastName: 'required|string',
  favoriteFood: 'string',
  favoriteColor: 'string',
  favoriteSong: 'string',
  favoriteMovie: 'string',
  favoriteHobby: 'string',
  birthday: 'date'
};

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.post('/', validate(rules), controller.createPerson);
router.put('/:id', validate(rules), controller.updatePerson);
router.delete('/:id', controller.deletePerson);

module.exports = router;
