//tests/setup.js
const mongoose = require("mongoose");

afterAll(async () => {
  await mongoose.connection.close();
});
