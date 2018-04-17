//require express in our app
 const express = require('express'),
  	bodyParser = require('body-parser'),
  	indexRoute = require('./public/scripts/main'),
  	mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo-app');


// generate a new express app and call it 'app'
var app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

//initialize variable to use for our environment port
const port = process.env.PORT || 3000;

/* set the view engine */
app.set('views', './views');
app.set('view engine', 'ejs');

var Todo = require('./models/todo');

app.use('/', indexRoute)

app.listen(port, ()=> {
  console.log(`Server is running.... ${port}`);
});
