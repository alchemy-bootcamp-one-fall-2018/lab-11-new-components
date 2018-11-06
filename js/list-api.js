let list = [
//     {
//         name: 'Go Skating',
//         due:   new Date('10/30/2018'),
//         done:  false
//     },
//     {
//         name: 'Go Skating',
//         due:   new Date('11/03 /2018'),
//         done:  false
//     }, 
];
function saveList() {
    localStorage.setItem('lists', JSON.stringify(list));
}
const listsApi = {
    getAll() {
        const json = localStorage.getItem('lists');
        if(json) {
            list = JSON.parse(json);
        }
        return list;
    },
    add(entry) {
        list.push(entry);
        saveList();
    },
    remove(entry) {
        const index = list.indexOf(entry);
        if(index !== -1) {
            list.splice(index, 1);
            saveList();
        }
    }
};
//fix remove button
export default listsApi;