import AddTo from './add-to.js';
import ToDoList from './list.js';
import listApi from './list-api.js';

const lists = listApi.getAll();
constructor(ToDoList);
this.init(lists, list => 
    //this will be the onRemove listener
    listApi.remove(list));



AddTo.init(list => {
//this will be the onAdd listener
//tell the api first
    listApi.add(list);
//then update components
    this.add(list);
});
//fix remove button

