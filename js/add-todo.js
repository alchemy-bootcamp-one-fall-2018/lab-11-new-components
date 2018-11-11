import html from './html.js';

function makeTemplate(){
    return html`
        <form id="add-form">
            <label>
                Task:
                <input required name="task" placeholder="Enter New Task">
            </label>
            <label>
                Due Date:
                <input type="date" required name="dueDate">
            </label>
            <button class="action">Add</button>
        </form>
    `;
}


class AddTodo {
  
    constructor(onAdd) {
        this.onAdd = onAdd;
    }
    
    render() {
        const dom = makeTemplate();

        const form = dom.querySelector('form');

        form.addEventListener('submit', event => {
            event.preventDefault();     
            const elements = form.elements;

            const todo = {
                task: elements.task.value,
                due: elements.dueDate.value
            };

            this.onAdd(todo);
            form.reset();
            document.activeElement.blur();
        });

        return dom;
    }
}

export default AddTodo;