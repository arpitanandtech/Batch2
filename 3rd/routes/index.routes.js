const express = require('express');

const taskRouter = require("./tasks/task.routes");

const router = express.Router();

router.use("/task", taskRouter);

module.exports = router;