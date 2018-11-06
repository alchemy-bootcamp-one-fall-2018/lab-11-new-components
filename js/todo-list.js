function makeTodo(todo) {
    const html = /*html*/`
      <li class="todo ${new Date(todo.dueDate) < Date.now() ? 'overdue' : ''}">
          <h4 class="task"> ${todo.task} </h4>
          <h5 class="date"> ${todo.dueDate}</h5>
          <button class="remove">Remove</button>
      </li>
        `;
        
    const template = document.createElement('template');

    template.innerHTML = html;

    return template.content;
}

const list = document.getElementById('todos');

const todoList = {
 
    init(todos, onRemove) {
        for(let i = 0; i < todos.length; i++) {
            todoList.add(todos[i]);
        }
        todoList.onRemove = onRemove;
    },
    add(todo) {
        const dom = makeTodo(todo);

        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        removeButton.addEventListener('click', function() {
            todoList.onRemove(todo);
            listItem.remove();
        });

        list.appendChild(dom);
    }
};

export default todoList;

