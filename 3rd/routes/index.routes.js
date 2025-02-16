const express = require('express');

const taskRouter = require("./tasks/task.routes");
const fileRouter = require("./file/file.router");
const userRouter = require("./user/user.router");
const isAuth = require('../middleware/isAuth');

const router = express.Router();

router.use("/task", isAuth, taskRouter);

router.use("/file", fileRouter);

router.use("/users", userRouter)

module.exports = router;