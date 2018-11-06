import addTodo from './add-todo.js';
import todoList from './todo-list.js';
import todoApi from './todos-api.js';

const todos = todoApi.getAll();

todoList.init(todos, function(todo) {
  // this is the onRemove listener

    todoApi.remove(todo);
});

addTodo.init(function(todo) {
  // this is the onAdd listener

  // tell the api service first
    todoApi.add(todo);

  // then update components
    todoList.add(todo);
});