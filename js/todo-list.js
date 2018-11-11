import html from './html.js';


function makeTemplate() {
    return html`
        <ul id="todos"></ul>
        
    `;
}
 
function makeTodo(todo) {
    return html`
      <li class="todo ${new Date(todo.dueDate) < Date.now() ? 'overdue' : ''}">
          <h4 class="task"> ${todo.task} </h4>
          <h5 class="date"> ${todo.dueDate}</h5>
          <button class="remove">Remove</button>
      </li>
    `;
       
}


class TodoList {
    constructor(todos, onRemove) {
        this.todos = todos;
        this.onRemove = onRemove;
    }
   
    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('ul');

        for(let i = 0; i < this.todos.length; i++) {
            this.add(this.todos[i]);
        }
       
        return dom; 
    }
   
    add(todo) {
        const dom = makeTodo(todo);

        if(this.onRemove) {
            const removeButton = dom.querySelector('button');
    
            removeButton.addEventListener('click', () => {
                this.onRemove(todo);
            
            });

        }

        this.list.appendChild(dom);
    }
    remove(index) {
        this.list.querySelectorAll('li')[index].remove();
    }
}

export default TodoList;

