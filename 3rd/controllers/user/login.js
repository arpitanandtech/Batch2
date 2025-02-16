const User = require("../../models/User/User");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const LoginController = function (req, res, next) {
  const { email, password } = req.body;

  User.find({ email: email }).then(response => {
    if (response.length == 0) {
      res.json({ message: "User not found" });
    } else {
      // Just confirm the password
      bcrypt.compare(password, response[0]?.password, function (err, result) {
        if (result) {

          jwt.sign({
            data: { id: response[0]?.id, }
          }, 'arpitanand', function (err, result) {
            res.json({ token: result });
          });
        } else {
          res.json({ message: "Invalid credentials" });
        }
      });
    }
  })

}

module.exports = LoginController;