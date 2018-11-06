import addTodo from './add-todo.js';
import todoList from './todo-list.js';
import todoApi from './todo-api.js';
import html from './html.js';

const items = todoApi.getAll();

    
function makeTemplate() {
    return html`
    <form id="add-form">
        <label>
            
        </label>
        <label>
            
        </label>
        <label>
            
        </label>
        </form>
        <h2> List </h2>
        <ul id="list"></ul>
    `; 

}

class TodoApp {
    render() {
        const dom = makeTemplate();
        const addAddTodo = dom.getElementById('add-todo');
        const addTodoList = dom.getElementById('tasks');

        const addItem = new AddItem(item => {
            todoApi.add(item);
            todoList.add(item); 
    });

    addAddTodo.appendChild(addItem.render());

    const todoList = new TodoList(items, item => {
        const index = todoApi.remove(item);
        todoList.remove(index); 
});

    console.log("todo", todoList.items);
    addTodoList.appendChild(todoList.render());

    return dom;
    }
}

const app = new TodoApp();
document.getElementById('root').appendChild;
