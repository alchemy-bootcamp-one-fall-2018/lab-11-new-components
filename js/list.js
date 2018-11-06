
/*exported makeList*/

function makeList(list) {
    const html = /*html*/`
        <li class="list">
            <p class="name">${list.name} ${list.due} ${list.done ? list.done : 'not yet'} <button class="danger" >X</button></p>
            
        </li>
    `;
    //A. Create template element to convert string to DOM
    const template = document.createElement('template');
    //B. Assign to innerHTML property
    template.innerHTML = html;
    //C. Return the `content` property which is the dom
    //(In a DocumentFragment)
    return template.content;
}
const lists = document.getElementById('lists');

const toDoLists = {
    //init
    //should include:
    //initial lists arrays
    //onRemove callback
    init(lists, onRemove){
        for(let i = 0; i < lists.length; i++) {
            toDoLists.add(lists[i]);
        }
        toDoLists.onRemove = onRemove;
    },
    add(list) {
        const dom = makeList(list);
        //do work of finding elements _before_appending
        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        removeButton.addEventListener('click', () => {
            toDoLists.onRemove(list);
            listItem.remove();
        });
    //append to <ul>, this will empty the fragment
        lists.appendChild(dom);
    }
};
//fix remove button
export default toDoLists;