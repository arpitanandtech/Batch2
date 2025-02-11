const mongoose = require('mongoose');

const tasksCollection = mongoose.Schema({
  title: {
    type: 'string',
  }
});

const Task = mongoose.model("tasks", tasksCollection);

module.exports = Task;