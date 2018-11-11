import AddTodo from './add-todo.js';
import TodoList from './todo-list.js';
import todoApi from './todos-api.js';
import html from './html.js';


const todos = todoApi.getAll();

function makeTemplate() {
    return html`
        
        <main>
            <section id="add-todo">
                <h2>Add Todo</h2>
            
            </section>

            <section>
                <h2>Todo List</h2>
                <ul id="todos"></ul>
            </section>
        </main>
  `;
}

class TodoApp {
    render() {
        const dom = makeTemplate();

        const addTodoSection = dom.querySelector('#add-todo');
        const todoListSection = dom.querySelector('#todos');
        
        const addTodo = new AddTodo(todo => {
            todoApi.add(todo);
            todoList.add(todo);
        });

        addTodoSection.appendChild(addTodo.render());

        const todoList = new TodoList(todo => {
            const index = todoApi.remove(todo);
            todoList.remove(index);
        });

        todoListSection.appendChild(todoList.render());

        return dom;
    }
}

const app = new TodoApp();
document.getElementById('root').appendChild(app.render());
