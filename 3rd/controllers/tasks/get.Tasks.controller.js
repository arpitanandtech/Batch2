const TODO = require("../../data/TODO");
const { client } = require("../../db/connect");

const getTasks = function (req, res, next) {

  const db = client.db();
  db.collection("task").find().toArray().then(respoonse => {
    res.json(respoonse);
  })

}

module.exports = getTasks;