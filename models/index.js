const mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/todos-api', {useNewUrlParser: true, useUnifiedTopology: true})



mongoose.Promise = Promise;

module.exports.Todo = require('./todos')