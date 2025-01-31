const fs = require('fs');

const fileReadController = function (req, res, next) {
  fs.readFile("../../data/data.txt", function (err, data) {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
}

module.exports = fileReadController;