/* exported addTo */
class AddTo {
    
    constructor(onAdd) {
        const form = document.getElementById('add-form');
        form.addEventListener('submit', event => {
           
            event.preventDefault();

            
            const elements = form.elements;
           
            const list = {
                name: elements.name.value,
                due: elements.due.value,
            };
            onAdd(list);

            form.reset();
        });
    }
}
export default AddTo;