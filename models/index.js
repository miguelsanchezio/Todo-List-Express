var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://admin:password@ds141406.mlab.com:41406/todolistapp-dev');

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");