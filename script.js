var todoForm = document.getElementById('todo-form');
var todoList = document.getElementById('todo-list');


// All of the logic is based on an event happening
todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
// event.preventDefault = STOPS page from refreshing 


//GET INFO
// event.target is the element that the event happened on. Contextual
// defined as a name attribute on html input
  var todo = event.target.todoInput.value;


//BUILD CONTAINER
// creating new elements of HTML in JS - to create ON THE FLY. 
// creates a new DOM NODE (object) - empty BARE BONES elements
  var li = document.createElement('li');
  var p = document.createElement('p');
  var deleteButton = document.createElement('button');
  var clearDiv = document.createElement('div');


//FILL CONTAINERS
  li.className = 'fadeIn';
  p.innerHTML = todo; //referencing the variable
  deleteButton.innerHTML = 'X';
  clearDiv.className = 'clearfix';

// Every time a delete button is created, it gets this event
// Delete button that only deletes one thing at a time
// based on what is clicked
// this is ONE event handler 
  deleteButton.addEventListener('click', function(event) {
 // console.log(event); - - what info is in the event? get info for event.target
    event.target.parentNode.remove();  //Google "JS remove element"
  });

// appends are ALWAYS the LAST to be coded
  li.appendChild(p);
  li.appendChild(deleteButton);
  li.appendChild(clearDiv);

  todoList.appendChild(li);

// resetting the input value
  event.target.todoInput.value = '';
});