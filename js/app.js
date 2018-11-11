import addTodo from './add-todo.js';
import todoList from './todo-list.js';
import todoApi from './todos-api.js';

const todos = todoApi.getAll();

todoList.init(todos, todo => {

    todoApi.remove(todo);
});

addTodo.init(todo => {

    todoApi.add(todo);
    todoList.add(todo);
});