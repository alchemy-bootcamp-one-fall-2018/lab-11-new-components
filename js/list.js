

function makeTask(todo) {
    const html = /*html*/`
            <li class="task">
                <h2 class="task">
                ${todo.task}
                ${todo.date}
                ${todo.done}
                </h2>
                <img src="img/sleep.jpg">
                <button class="danger">X</button>
            </li>
        `;
    
    const template = document.createElement('template');

    template.innerHTML = html;
    
        // C. Return the `content` property which is the dom
        // (In a DocumentFragment)
    return template.content;
}
    
const list = document.getElementById('tasks');
    
const taskList = {
        // init
        // should include:
        // 1. initial task array 
    init(task, onRemove) {
        for(let i = 0; i < task.length; i++) {
            taskList.add(task[i]);
        }
        taskList.onRemove = onRemove;
    },
    add(task) {
        const dom = makeTask(task);
        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');
    
        removeButton.addEventListener('click', function() {
            taskList.onRemove(task);
            listItem.remove();
        });
    
            // append to <ul>, this will empty the fragment
        list.appendChild(dom);
    }
};
    
export default taskList;






