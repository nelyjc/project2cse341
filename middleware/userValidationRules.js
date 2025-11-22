// middleware/userValidationRules.js

const userValidationRules = {
  
  username: 'required|string|min:3',
  firstName: 'required|string|min:2',
  lastName: 'required|string|min:2',
  email: 'required|email',
  age: 'numeric|min:1',

};

module.exports = userValidationRules;
