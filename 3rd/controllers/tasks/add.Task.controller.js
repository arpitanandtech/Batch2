

// const tasksSchema = require("../../validation/tasks/task");

const Task = require("../../models/Task");

function addTask(req, res, next) {
  const data = req.body.title;

  const id = req.id;

  Task.create({ title: data, user: id }).then(response => {
    res.json(response);
  });
}

module.exports = addTask;