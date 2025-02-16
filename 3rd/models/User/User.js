const mongoose = require('mongoose');

const userCollection = mongoose.Schema({
  email: {
    type: 'string',
  },
  password: {
    type: 'string',
  },
  full_name: {
    type: 'string',
  }
});

const User = mongoose.model("users", userCollection);

module.exports = User;