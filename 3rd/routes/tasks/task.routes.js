const express = require("express");
const addTask = require("../../controllers/tasks/add.Task.controller");
const deleteTask = require("../../controllers/tasks/delete.Task.controller");
const getTasks = require("../../controllers/tasks/get.Tasks.controller");
const updateTask = require("../../controllers/tasks/update.Task.controller");
const router = express.Router(); // Helps in routing!

router.get('/get', getTasks);

router.post("/add", addTask);

router.put("/:title/update", updateTask);

router.delete('/:title/delete', deleteTask);

module.exports = router;