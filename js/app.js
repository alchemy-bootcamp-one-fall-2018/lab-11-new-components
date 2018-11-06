import addTodo from './add-todo.js';
import todoList from './todo-list.js';
import todoApi from './todo-api.js';

const todoItems = todoApi.getAll();

todoList.init(todoItems, function(task) {
    //the onRemove listener

    todoApi.remove(task);
});

addTodo.init(function(task) {
    
    // tell the api service
    todoApi.add(task);

    //then update components
    todoList.add(task);
});