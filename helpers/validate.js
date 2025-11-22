// helpers/validate.js
const Validator = require('validatorjs');

const validator = (body, rules, customMessages, callback) => {
    const validation = new Validator(body, rules, customMessages);
    if (validation.fails()) {
        callback(validation.errors, false);
    } else {
        callback(null, true);
    }
};

module.exports = validator;
