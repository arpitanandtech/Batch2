const TODO = require("../../data/TODO");

const tasksSchema = require("../../validation/tasks/task");

function addTask(req, res, next) {
  const data = req.body.title;
  tasksSchema.validate(req.body).then(_resp => {
    TODO.push({ title: data });
    res.json(TODO);
  }).catch(err => {
    res.json({ error: err?.message });
  });
}

module.exports = addTask;