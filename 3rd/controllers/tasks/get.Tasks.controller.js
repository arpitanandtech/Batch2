const TODO = require("../../data/TODO");

const getTasks = function (req, res, next) {
  res.json(TODO);
}

module.exports = getTasks;