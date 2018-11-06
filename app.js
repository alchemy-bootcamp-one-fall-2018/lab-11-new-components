import pokedexApi from './pokemonApi.js';
import PokemonTable from './pokemon-table.js';
import pokemonFilter from './filterPokemon.js';

const pokemon = pokedexApi.getAll();

PokemonTable.constructor(pokemon);

 
pokemonFilter.init(function(nameFilter, typeFilter, type2Filter, attackFilter, defenseFilter) {

    let filtered;

    if(nameFilter || typeFilter || type2Filter || attackFilter || defenseFilter){


        nameFilter = nameFilter.toLowerCase();


        filtered = pokemon.filter(function(pokemon) { 
            const hasName = ! nameFilter

            || pokemon.pokemon.includes(nameFilter); 

            const hasType = ! typeFilter
            || pokemon.type_1.includes(typeFilter);

            const hasType2 = ! type2Filter
            || pokemon.type_2.includes(type2Filter);

            const hasAttack = ! attackFilter
            || pokemon.attack >= attackFilter;

            const hasDefense = ! defenseFilter
            || pokemon.defense >= defenseFilter;

            return hasName && hasType && hasType2 && hasAttack && hasDefense;

        });
    }
    else {
        filtered = pokemon;
    }
    PokemonTable.update(filtered); 

});
 