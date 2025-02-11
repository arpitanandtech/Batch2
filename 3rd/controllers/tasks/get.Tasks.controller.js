const Task = require("../../models/Task");

const getTasks = function (req, res, next) {
  Task.find().then(response => {
    res.json(response);
  })
}

module.exports = getTasks;