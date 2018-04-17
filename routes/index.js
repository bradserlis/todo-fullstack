const express=require('express');
const indexRoute = express.Router();
const db = require('../models');


indexRoute.get('/', function(req, res){
	db.Todo.find(function(err, todos){
		res.render('index', {todos: todos});
	});
});

indexRoute.post('/', function (req, res) {
	console.log(req.body);
	db.Todo.create(req.body, function(err, postedTodo){
  		res.redirect('/');
	});
});

indexRoute.delete('/:id', function(req, res){
	console.log('delete');
	db.Todo.findByIdAndRemove(req.params.id, function(err, removedTodo){
		res.send('successfully removed');
	});	
});

module.exports= indexRoute;