const { jwtDecode } = require("jwt-decode");
function isAuth(req, res, next) {

  const token = (req.headers?.authorization);

  const decode = token.split(" ")[1];

  const mydata = jwtDecode(decode);

  req.id = mydata?.data?.id;

  next();
}

module.exports = isAuth;