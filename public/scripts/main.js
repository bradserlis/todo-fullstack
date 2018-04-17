// console.log("don't worry, the main.js file is still working");
// let $toDoList;
// let allToDos = [];
// // const pizza = require('../db/pizza.js')

$(document).ready(function(){

// let $toDoList = $('#toDoTarget');
  // $.ajax({
  //   method: 'GET',
  //   url: '/todolist',
  //   success: handleSuccess,
  //   error: handleError
  // });

  // $('#newToDo').on('submit', function(e) {
  //   e.preventDefault();
  //   $.ajax({
  //     method: 'POST',
  //     url: '/',
  //     data: $(this).serialize(),
  //     success: newPostSuccess,
  //     error: newPostError
  //   });
  // });

  $('.deleteBtn').click(function() {
    console.log('clicked delete button to', '/'+$(this).attr('data-id'));
    $.ajax({
      method: 'DELETE',
      url: '/'+$(this).attr('data-id'),
      success: function(){
      	console.log('deleted!');
      	// $(this).parent().remove();
      	location.href = '/';
      },
      error: function(){
      	console.log('we effed up');
      }
    });

  });

});

// function getToDoHtml(todo) {
//   return `<hr>
//           <p>
//             <b>${todo.task}</b>
//             <b>${todo.description}</b>
//             <button type="button" name="button" class="deleteBtn btn btn-danger pull-right" data-id=${todo._id}>Delete</button>
//           </p>`;
// }

// function getAllToDosHTML(todo) {
//   console.log(todo, typeof todo);
//   return todo.map(getToDoHtml).join("");
// }

// function render () {
//   // empty existing posts from view
//   $toDoList.empty();
//   console.log('render', allToDos);
//   var toDosHtml = getAllToDosHTML(allToDos);
//    $toDoList.append(toDosHtml);
// };


// function newPostSuccess(json) {
//    console.log('new post success', json);
//   $('#newToDo input').val('');
//   allToDos.push(json);
//   render();
// }

// function newPostError() {
//   console.log('new post error!');
// }

// function handleSuccess(json) {
//   console.log('handle success', json);
//   allToDos = json;
//   render();
// }

// function handleError(e) {
//   console.log('uh oh', e);
//   $('#toDoTarget').text('Failed to load posts, is the server working?');
// }
