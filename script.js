document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('todo-input');

  let todoList = document.getElementById('todo-list')
  let todoInput = document.getElementById('todo-input')
  let addButton = document.getElementById('add-button')
  let todoCount = 0;

  let addToDo = function() {
    let todoCol = document.createElement('div');
    todoCol.setAttribute('class', 'col-xs-12 todo');

    let todoRow = document.createElement('div');
    todoRow.setAttribute('class', 'row');

    let removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-danger remove-button');
    removeButton.innerHTML = 'REMOVE';
    removeButton.onclick = function() {
      let child = this.parentNode.parentNode;
      todoList.removeChild(child);
      todoCount--;
    }

    let h5 = document.createElement('h5');
    h5.setAttribute('class', 'col-xs-8 items');


    h5.innerHTML = todoInput.value;

    todoRow.appendChild(h5);
    todoRow.appendChild(removeButton);
    todoCol.appendChild(todoRow);
    todoList.appendChild(todoCol);
  };

  let checkThenAdd = function() {  
    if(todoCount < 10 && todoInput.value !== '') {
      addToDo();
      todoCount++
      todoInput.value = '';
    }
  }

  addButton.addEventListener('click', checkThenAdd);

  todoInput.addEventListener('keyup', function(event) {
    if(event.key === 'Enter') {
      checkThenAdd();
    }
  });
});