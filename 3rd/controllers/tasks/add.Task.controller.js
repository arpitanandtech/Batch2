const TODO = require("../../data/TODO");

function addTask(req, res, next) {
  const data = req.body.title;

  TODO.push({ title: data });

  res.json(TODO);
}

module.exports = addTask;