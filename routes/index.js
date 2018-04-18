const express=require('express');
const indexRoute = express.Router();
const db = require('../models');


indexRoute.get('/', function(req, res){
	db.Todo.find(function(err, todos){
		res.render('index', {todos: todos});
	});
});

indexRoute.get('/api/todo', function(req, res){
	db.Todo.find(function(err, todos){
		res.json(todos);
	});
});

indexRoute.get('/api/todo/:id', function(req, res){
	db.Todo.findById(req.params.id, function (err, foundit) {
		res.json(foundit);
	});
});



indexRoute.post('/', function (req, res) {
	db.Todo.create(req.body, function(err, postedTodo){
  		res.redirect('/');
	});
});

// update todo
indexRoute.put('/:id', function (req, res) {
 	// get todo id from url params (`req.params`)
	var todoId = req.params.id;
	// find todo in db by id
  	db.Todo.findOne({ _id: todoId }, function (err, foundTodo) {
	    // update the todos's attributes
	    foundTodo.task = req.body.task;
	    foundTodo.description = req.body.description;
	    // save updated todo in db
	    foundTodo.save(function (err, savedTodo) {
	    	res.json(savedTodo);
		});
	});
});


indexRoute.delete('/:id', function(req, res){
	console.log('delete');
	db.Todo.findByIdAndRemove(req.params.id, function(err, removedTodo){
		res.send('successfully removed');
	});	
});

module.exports= indexRoute;