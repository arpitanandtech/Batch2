const Task = require("../../models/Task");

const deleteTask = function (req, res, next) {
  const title = req.params.title;
  // const {title} = req.params;

  // Task.deleteOne({
  //   title: title
  // }).then(resp => {
  //   res.json(resp);
  // }).catch(err => {
  //   console.log(err);
  // });

  Task.deleteMany({
    title: title
  }).then(resp => {
    res.json(resp);
  }).catch(err => {
    console.log(err);
  })
}

module.exports = deleteTask;