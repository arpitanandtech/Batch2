const TODO = require("../../data/TODO");

const deleteTask = function (req, res, next) {
  const title = req.params;
  const index = TODO.findIndex(function (item) {
    return item.title === title.title
  });
  // Splice with index 
  TODO.splice(index, 1);
  res.json(TODO);
}

module.exports = deleteTask;