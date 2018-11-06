/* eslint-disable no-console */

import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js';
import pokemonFilter from './pokemon-filter.js';

//get the initial data
const pokemonData = pokemonApi.getAll();



//data flows down
pokemonTable.init(pokemonData);


//events up via callback
pokemonFilter.init(function(nameFilter, heightFilter, weightFilter, attackFilter, defenseFilter) {
    
    
    let filtered;
    //do we have a filter?
    if(nameFilter || heightFilter || weightFilter || attackFilter || defenseFilter) {
        //yes!, filter based on pokemon, height, weight, attack, or defense
        nameFilter = nameFilter.toLowerCase();
       

        filtered = pokemonData.filter(function(pokemon) {
            const hasPokemon = !nameFilter
            || pokemon.pokemon.toLowerCase().includes(nameFilter);

            const hasHeight = !heightFilter || pokemon.height >= heightFilter;

            const hasWeight = !weightFilter || pokemon.weight >= weightFilter;

            const hasAttack = !attackFilter || pokemon.attack >= attackFilter;

            const hasDefense = !defenseFilter || pokemon.defense >= defenseFilter;

            return hasPokemon && hasHeight && hasWeight && hasAttack && hasDefense;
        });
    }
            
    else {
        //no! use the full list
        filtered = pokemonData;
    }    

    //tell the table to update
    pokemonTable.update(filtered);
});