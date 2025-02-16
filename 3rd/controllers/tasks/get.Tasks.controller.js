const Task = require("../../models/Task");

const getTasks = function (req, res, next) {
  const id = req.id;
  Task.find({
    user: id
  }).then(response => {
    res.json(response);
  })
}

module.exports = getTasks;