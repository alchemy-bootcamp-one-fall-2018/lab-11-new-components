import html from './html.js';


onst addTodo = {

    init(onAdd){
        const form = document.getElementById('add-form');

        form.addEventListener('submit', function(event) {
        
            event.preventDefault();

            //form elements
            const elements = form.elements;

            const task = {
                task: elements.task.value,
                date: new Date(elements.date.value)
            };

            onAdd(task);

            form.reset();
            document.activeElement.blur();
        });
    }
};



export default addTodo;