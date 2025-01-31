const fs = require('fs');
const path = require('path');

const fileReadController = function (req, res, next) {

  console.log(process.cwd());

  const p = path.join(process.cwd() + "/data/data.txt")

  fs.readFile(p, "utf8", function (err, data) {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
  res.json("ok")
}

module.exports = fileReadController;