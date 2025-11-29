// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./data/connection');
const favoritesRoutes = require('./routes/favoritesRoute');
const userRoute = require('./routes/userRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const session = require('express-session');
const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;

const app = express();
const port = process.env.PORT || 7000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// ----------------------------------------
// SESSION SETUP (for OAuth)
// ----------------------------------------
app.use(
  session({
    secret: "supersecretkeyhere",
    resave: false,
    saveUninitialized: false,
  })
);

// ----------------------------------------
//  PASSPORT INITIALIZATION
// ----------------------------------------
app.use(passport.initialize());
app.use(passport.session());

// ----------------------------------------
// GITHUB OAUTH STRATEGY
// ----------------------------------------
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      // return profile from GitHub
      return done(null, profile);
    }
  )
);

// serialize/deserialize for session
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// ----------------------------------------
//  ROUTES
// ----------------------------------------

// Login status route
app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Logged in as ${req.user.username}`);
  } else {
    res.send('Not logged in');
  }
});

// GitHub OAuth login
app.get('/auth/github', passport.authenticate('github'));

// GitHub OAuth callback route
app.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/api-docs' }),
  (req, res) => {
    res.redirect('/');
  }
);

// Logout
app.get('/logout', (req, res) => {
  req.logout(() => {
    res.send('Logged out');
  });
});

// API Routes
app.use('/favorites', favoritesRoutes);
app.use('/user', userRoute);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
