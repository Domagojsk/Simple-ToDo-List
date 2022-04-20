'use strict';

// Selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoItems = document.querySelector('.todo-items');
const filterOption = document.querySelector('.filter-todo');

// Event Listeners
todoBtn.addEventListener('click', addTodo);
todoItems.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Functions
function addTodo(event) {
  // prevent form from submitting
  event.preventDefault();

  //   Todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  //   Li
  const newLiTodo = document.createElement('li');
  newLiTodo.classList.add('todo-item');
  newLiTodo.innerText = todoInput.value;

  // append newLiTodo to todoDiv
  todoDiv.appendChild(newLiTodo);

  //   Complete btn
  const completedBtn = document.createElement('button');
  completedBtn.classList.add('complete-btn');
  completedBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  //   append completedBtn to todoDiv
  todoDiv.appendChild(completedBtn);

  //   Delete btn
  const deletedBtn = document.createElement('button');
  deletedBtn.classList.add('delete-btn');
  deletedBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  //   append deleteBtn to todoDiv
  todoDiv.appendChild(deletedBtn);

  //   Attach to todoDiv to Html UL
  todoItems.appendChild(todoDiv);

  // Clear input textarea
  todoInput.value = '';
}

// DELETE BUTTON -- CHECK BUTTON FUNCTION

function deleteCheck(e) {
  const item = e.target;

  // Delete todo item
  if (item.classList[0] === 'delete-btn') {
    const todo = item.parentElement;
    // Animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  }

  // Done todo  item check
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

// FILTER TODO LIST (all-completed-uncompleted)
function filterTodo(e) {
  const todos = todoItems.childNodes;

  todos.forEach(function (todo) {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
    }
  });
}
