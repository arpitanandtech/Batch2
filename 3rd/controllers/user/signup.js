const User = require("../../models/User/User");
const bcrypt = require('bcrypt');

const SignupController = function (req, res, next) {
  const { full_name, email, password } = req.body;

  bcrypt.hash(password, 10, function (err, hash) {
    User.create({
      email: email,
      full_name: full_name,
      password: hash
    }).then(response => {
      res.json(response);
    })
  });
}

module.exports = SignupController;