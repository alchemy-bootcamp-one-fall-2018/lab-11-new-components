import html from './html.js';

function makeTemplate(){
    return html `
    <ul id="tasks"></ul>
    `;
}

function makeTodoList(todo){
   return html`
    <li class="taskItem">
        <h3 class="task $(task.date < Date.now() ? 'date-passed' : ''}">
            ${todo.task} ${todo.date}
        </h3>
       
        <div><button class="remove">X</button></div>
    </li>
    `;

//uses template to create DOM for new todo

  class TodoList {
      constructor(todoItems, onRemove) {
        this.todoItems = todoItems;
        this.onRemove = onRemove;
      }

      render(){
          const dom = makeTemplate();
          this.tasks = dom.querySelector('ul');

          for(let i = 0; i < this.todoItems.length; i++) {
              this.add(this.todoItems[i]);
          }

          return dom;
      }

      add(task){
          const dom = makeTodoList(task);

          const listItem = dom.querySelector('li');
      }
  }


};



export default todoList;