// middleware/validate.js
const Validator = require('validatorjs');

function validate(rules) {
  return function (req, res, next) {
    const validation = new Validator(req.body, rules);

    if (validation.fails()) {
      return res.status(400).json({ errors: validation.errors.all() });
    }

    next();
  };
}

module.exports = validate;
