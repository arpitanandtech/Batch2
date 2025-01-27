const TODO = require("../../data/TODO");

const updateTask = function (req, res, next) {
  const data = req.body.title;
  const title = req.params;

  const index = TODO.findIndex(function (item) {
    return item.title === title.title
  });
  TODO[index].title = data;
  res.json(TODO);
}

module.exports = updateTask