
let todoItems = [
    {
        task: 'get programming',
        date: '10/28/2018'
    },
    {
        task: 'fun labs',
        date: '10/29/2018'
    }
];

function saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(todoItems));
}

function newParser(key, value) {
    if(key !== 'date') return value;
    return new Date(value);
}

const todoApi = {
    getAll(){
        const json = localStorage.getItem('todoItems');
        localStorage.setItem('tasks', JSON.stringify(todoItems));
        if(json) {
            todoItems = JSON.parse(json, newParser);
        }
        return todoItems;
    },
    add(task) {
        todoItems.push(task);
        saveTasks();
    }, 
    remove(task) {
        const index = todoItems.indexOf(task);
        if(index !== -1) {
            todoItems.splice(index, 1);
            saveTasks();
        }
    }
};



export default todoApi;