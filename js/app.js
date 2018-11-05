import pokemonApi from './pokemon-api.js';
import pokemonsTable from './pokemon-table.js';
import pokemonsFilter from './pokemon-filter.js';

const pokemons = pokemonApi.getAll();

pokemonsTable.init(pokemons);    //data down

//data down
pokemonsFilter.init(function(pokemonFilter, type_1Filter, 
    type_2Filter, hpFilter, ability_1Filter, ability_2Filter, 
    ability_hiddenFilter) {
        
    let filtered;
        
    if(pokemonFilter || type_1Filter || type_2Filter 
            || hpFilter || ability_1Filter || ability_2Filter 
            || ability_hiddenFilter) {
               
        filtered = pokemons.filter(function(pokemon) { 
            const hasPokemon = !pokemonsFilter || pokemon.pokemon.includes(pokemonFilter);
            const hasType1 = !type_1Filter || pokemon.type_1.includes(type_1Filter);
            const hasType2 = !type_2Filter || pokemon.type_2.includes(type_2Filter);
            const hasHp = !hpFilter || pokemon.hp >= hpFilter;
            const hasAbility1 = !ability_1Filter || pokemon.ability_1.includes(ability_1Filter);
            const hasAbility2 = !ability_2Filter || pokemon.ability_2.includes(ability_2Filter);
            const hasHidden = !ability_hiddenFilter || pokemon.ability_hidden.includes(ability_hiddenFilter); 
            return hasPokemon && hasType1 && hasType2 && hasHp
                && hasAbility1 && hasAbility2 && hasHidden;

        }); 
    } else {
        filtered = pokemons;
    }    
            
    pokemonsTable.update(filtered);
});