const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/toDoApp');

module.exports.Todo = require('./todo.js');

