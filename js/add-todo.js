const addTodo = {
  
    init(onAdd) {
        const form = document.getElementById('add-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();     
            const elements = form.elements;

            const todo = {
                task: elements.task.value,
                dueDate: elements.dueDate.value
            };

            onAdd(todo);
            form.reset();
            document.activeElement.blur();

        });
    }
};

export default addTodo;