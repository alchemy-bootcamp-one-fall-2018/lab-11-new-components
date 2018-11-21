const nameFilter = document.getElementById('poke-pokemon');
const type_1Filter = document.getElementById('poke-type_1');
const type_2Filter = document.getElementById('poke-type_2');
const ability1Filter = document.getElementById('poke-ability-1');
const hpFilter = document.getElementById('poke-hp');

class PokeFilter {
    constructor(onFilter) {
        nameFilter.addEventListener('keyup', ()=> {
            onFilter(nameFilter.value, type_1Filter.value, type_2Filter.value, ability1Filter.value, hpFilter.value);
        });
        type_1Filter.addEventListener('keyup', ()=> {
            onFilter(nameFilter.value, type_1Filter.value, type_2Filter.value, ability1Filter.value, hpFilter.value);
        });
        type_2Filter.addEventListener('keyup', ()=> {
            onFilter(nameFilter.value, type_1Filter.value, type_2Filter.value, ability1Filter.value, hpFilter.value);
        });
        ability1Filter.addEventListener('keyup', ()=> {
            onFilter(nameFilter.value, type_1Filter.value, type_2Filter.value, ability1Filter.value, hpFilter.value);
        });
        hpFilter.addEventListener('keyup', ()=> {
            onFilter(nameFilter.value, type_1Filter.value, type_2Filter.value, ability1Filter.value, hpFilter.value);
        });
    }
}

export default PokeFilter;
