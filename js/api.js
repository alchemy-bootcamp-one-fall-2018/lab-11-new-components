
let tasks = [
   
];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const tasksApi = {
    getAll() {
        const json = localStorage.getItem('tasks');
        if(json) {
            tasks = JSON.parse(json);
        }
        return tasks;
    },
    add(task) {
        tasks.push(task);
        //save array to local storage
        saveTasks();
    },
    remove(task) {
        const index = tasks.indexOf(task);
        if(index !== -1) {
            tasks.splice(index, 1);
            saveTasks();

        }
    }
};

export default tasksApi;