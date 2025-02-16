
const express = require("express");
const LoginController = require("../../controllers/user/login");
const SignupController = require("../../controllers/user/signup");

const router = express.Router();

router.post('/login', LoginController);

router.post("/signup", SignupController);

module.exports = router;

// /api/v1/users/login
// /api/v1/users/signup
