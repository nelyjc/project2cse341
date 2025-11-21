// middleware/validate.js
const Validator = require('validatorjs');

module.exports = (rules) => {
  return (req, res, next) => {
    const validation = new Validator(req.body, rules);

    if (validation.fails()) {
      return res.status(400).json(validation.errors.all());
    }

    next();
  };
};
