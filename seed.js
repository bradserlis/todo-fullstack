var db = require('./models');

var todo1 = {
    task: "To Do 1",
    description: "Read any books"
  };

// create new records based on the array books_list
db.Todo.create(todo1, function(err, todos){
  if (err) { 
    return console.log('err', err); 
  }
  console.log("created task:", todo1.task);
  process.exit();
});