const nameInput = document.getElementById('filter-name');
const type1Input = document.getElementById('filter-type1');
const type2Input = document.getElementById('filter-type2');
const hpInput = document.getElementById('filter-hp');
const ability1Input = document.getElementById('filter-ability1');
const ability2Input = document.getElementById('filter-ability2');
const hiddenInput = document.getElementById('filter-hiddenAbility');

const pokemonsFilter = {
    init(onFilter) {
        function handleFilter() {
            onFilter(nameInput.value, type1Input.value,   
                type2Input.value, hpInput.value, ability1Input.value,
                ability2Input.value, hiddenInput.value);
        }
        nameInput.addEventListener('keyup', handleFilter);
        type1Input.addEventListener('keyup', handleFilter);
        type2Input.addEventListener('keyup', handleFilter);
        hpInput.addEventListener('keyup', handleFilter);
        ability1Input.addEventListener('keyup', handleFilter);
        ability2Input.addEventListener('keyup', handleFilter);
        hiddenInput.addEventListener('keyup', handleFilter);
    }
}; 

export default pokemonsFilter;