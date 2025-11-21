// middleware/validate.js
const Validator = require('validatorjs');

module.exports = (rules) => {
  return (req, res, next) => {
    // Filter out undefined or null values
    const filteredBody = {};
    for (const key in req.body) {
      if (req.body[key] !== undefined && req.body[key] !== null) {
        filteredBody[key] = req.body[key];
      }
    }

    const validation = new Validator(filteredBody, rules);

    if (validation.fails()) {
      return res.status(400).json(validation.errors.all());
    }

    next();
  };
};
