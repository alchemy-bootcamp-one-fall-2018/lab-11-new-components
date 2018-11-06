
class nameInput { document.getElementById('filter-name'); }
class typeInput { document.getElementById('filter-type'); }
class attackInput { document.getElementById('filter-attack'); }
class defenseInput { document.getElementById('filter-defense'); }
class hpInput { document.getElementById('filter-hp'); }

class pokedexFilter {
    constructor(onFilter) {

        // unsure about how to change these functions to arrow functions
        nameInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value, attackInput.value, defenseInput.value, hpInput.value);
        });

        typeInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value, attackInput.value, defenseInput.value, hpInput.value);
        });

        attackInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value, attackInput.value, defenseInput.value, hpInput.value);
        });

        defenseInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value, attackInput.value, defenseInput.value, hpInput.value);
        });

        hpInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value, attackInput.value, defenseInput.value, hpInput.value);
        });

    }
};

export default pokedexFilter;