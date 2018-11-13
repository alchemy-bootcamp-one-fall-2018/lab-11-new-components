let todos = [
    {
        task: 'Grocery shopping',
        dueDate: [new Date('10/30/2018')]
    },
    {
        task: 'Do laundry',
        dueDate: [new Date('10/31/2018')]
    }
];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function dateParser(key, value) {
    if(key !== 'date') return value;    
    return new Date(value);
}

const todosApi = {
    getAll() {
        const json = localStorage.getItem('todos');
        if(json) {
            todos = JSON.parse(json, dateParser);
        }
        return todos;
    },
    add(todo) {
        todos.push(todo);
        saveTodos();
    },
    remove(todo) {
        const index = todos.indexOf(todo);
        if(index !== -1) {
            todos.splice(index, 1);
            saveTodos();
            return index;
        }
    }
  
};

export default todosApi;