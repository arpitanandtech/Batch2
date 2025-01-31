const express = require('express');

const taskRouter = require("./tasks/task.routes");
const fileRouter = require("./file/file.router");

const router = express.Router();

router.use("/task", taskRouter);

router.use("/file", fileRouter);

module.exports = router;