const nameInput = document.getElementById('filter-name');
const typeInput = document.getElementById('filter-type');
const type2Input = document.getElementById('filter-type2');
const attackInput = document.getElementById('filter-attack');
const defenseInput = document.getElementById('filter-defense');


class PokemonFilter {

    constructor(onFilter) {

             handleFilter(); => 
            onFilter(nameInput.value, typeInput.value, type2Input.value, attackInput.value, defenseInput.value);
        }
        nameInput.addEventListener('keyup', handleFilter);
        typeInput.addEventListener('keyup', handleFilter);
        type2Input.addEventListener('keyup', handleFilter);
        attackInput.addEventListener('keyup', handleFilter);
        defenseInput.addEventListener('keyup', handleFilter);

    }
};

export default PokemonFilter;
