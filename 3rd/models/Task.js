const mongoose = require('mongoose');

const tasksCollection = mongoose.Schema({
  title: {
    type: 'string',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Task = mongoose.model("tasks", tasksCollection);

module.exports = Task;