

// const tasksSchema = require("../../validation/tasks/task");

const Task = require("../../models/Task");

function addTask(req, res, next) {
  const data = req.body.title;
  Task.create({ title: data }).then(response => {
    res.json(response);
  });
}

module.exports = addTask;