import html from './html.js';


function makeTemplate(){
   return html` 
    <form id="add-form">
        <label>
            Task:
            <input required name="task">
        </label>
        <label>
            Due Date:
            <input type="date" required name="date">
        </label>
        <label>
            <button class="action">Add task</button>
        </label>
    </form>
    `;
}

class AddForm {
    constructor(onAdd) {
        this.onAdd = onAdd;
    }

    render(){
        const dom = makeTemplate();

        const form = dom.querySelector('add-form');

        form.addEventListener('action', event => {
            // prevent form from reloading page
            event.preventDefault();

            //form elements
            const elements = form.elements;

            const todoList = {
                task: elements.name.value,
                date: elements.date.value,
                action: elements.action.value
            };

            this.onAdd(todoList);

            form.reset();
            document.activeElement.blur();
        });

        return dom;
    }
}

export default addTodo;