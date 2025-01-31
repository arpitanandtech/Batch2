const express = require("express");
const fileReadController = require("../../controllers/file/readFile.controller");
const router = express.Router(); // Helps in routing!

router.get('/get', fileReadController);

module.exports = router;