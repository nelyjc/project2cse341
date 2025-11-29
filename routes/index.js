const passport = require('passport');

//routes/index.js
const router = require('express').Router();


router.use('/', require('./swagger')); 
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use('/user', require('./userRoute'));
router.use('/favorites', require('./favoritesRoute'));

router.get('/', (req, res) => {
  //#swagger.tags = ['Welcome to the API']
  res.send('Welcome to the favorite API!');
});

router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('logout', function(req, res, next) {
  req.logout(function(error) {
    if (error) { return next(error); }
    res.redirect('/'); 
  });
});


module.exports = router;