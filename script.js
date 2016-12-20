var todoForm = document.getElementById('todo-form');
var todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var todo = event.target.todoInput.value;

  var li = document.createElement('li');
  var p = document.createElement('p');
  var deleteButton = document.createElement('button');
  var clearDiv = document.createElement('div');

  li.className = 'fadeIn';
  p.innerHTML = todo;
  deleteButton.innerHTML = 'X';
  clearDiv.className = 'clearfix';

  deleteButton.addEventListener('click', function(event) {
    event.target.parentNode.remove();
  });

  li.appendChild(p);
  li.appendChild(deleteButton);
  li.appendChild(clearDiv);

  todoList.appendChild(li);

  event.target.todoInput.value = '';
});