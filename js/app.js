import pokeApi from './pokemon-api.js';
import PokeFilter from './pokemon-filter.js';
import PokeTable from './pokemon-table.js';

const pokedex = pokeApi.getAll();
const pokeTable = new PokeTable(pokedex);

new PokeFilter(
    ((nameFilter, type_1Filter, type_2Filter, ability1Filter, hpFilter) => {
        let filtered;
        if(nameFilter || type_1Filter || type_2Filter || ability1Filter || hpFilter) {
            nameFilter = nameFilter.toLowerCase();
            type_1Filter = type_1Filter.toLowerCase();
            type_2Filter = type_2Filter.toLowerCase();
            ability1Filter = ability1Filter.toLowerCase();

            filtered = pokedex.filter((pokemons) => {
                const hasPokemon = !nameFilter
            || pokemons.pokemon.toLowerCase().includes(nameFilter);
                const hasType1 = !type_1Filter
            || pokemons.type_1.toLowerCase().includes(type_1Filter);
                const hasType2 = !type_2Filter
            || pokemons.type_2.toLowerCase().includes(type_2Filter);
                const hasAbility1 = !ability1Filter
            || pokemons.ability_1.toLowerCase().includes(ability1Filter);
                const hasHp = !hpFilter
            || pokemons.hp >= hpFilter;

                return hasPokemon && hasType1 && hasType2 && hasAbility1 && hasHp;
            });
        }
        else {filtered = pokedex;}
        pokeTable.update(filtered);
    }));
