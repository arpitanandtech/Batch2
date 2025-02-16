const Task = require("../../models/Task");

const updateTask = function (req, res, next) {
  const data = req.body.title; //  Body
  const title = req.params.title;

  Task.updateMany({
    title: title,
  }, {
    $set: {
      title: data
    }
  }).then(response => {
    res.json(response);
  }).catch(err => {
    // Handle error;
    console.log(err);
  });

  // Task.updateOne({
  //   title: title,
  // }, {
  //   $set: {
  //     title: data
  //   }
  // }).then(response => {
  //   res.json(response);
  // }).catch(err => {
  //   // Handle error;
  //   console.log(err);
  // });

}

module.exports = updateTask