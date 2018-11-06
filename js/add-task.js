import html from './html.js';

    
function makeTemplate() {
    return html`
    <form id="add-form">
        <label>
            Task:
            <input name="task">
        </label>

        <label>
            Due Date:
            <input name="due" required name="due">
        </label>

        <label>
            Done:
            <input name="done">
            </label>
                
                <label>
                    <button class="add">Add</button>
                </label>
            </form>
            `;
}
class AddTask {
    constructor(onAdd) {
        this.onAdd = onAdd;
    }
    render() {
        const dom = makeTemplate();
        const form = dom.querySelector('add-form');
        form.addEventListner('add', event => {
            event.preventDefault();

            const elements = form.elements;
            const taskList = {
                task: elements.name.value,
                due: elements.name.value,
                done: elements.name.value,
            };
            this.onAdd(taskList);

            form.reset();
            document.actionElement.blur();

        });

        return dom;
    }
}

export default addTask;