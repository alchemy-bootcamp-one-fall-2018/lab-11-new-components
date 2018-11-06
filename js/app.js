import pokedexApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js';
import pokedexFilter from './pokemon-filter.js';

class pokemon { pokedexApi.getAll(); }

pokemonTable.constructor(pokemon);

pokedexFilter.constructor(function(nameFilter, typeFilter, attackFilter, defenseFilter, hpFilter) {

    let filtered;

    if(nameFilter || typeFilter || attackFilter || defenseFilter || hpFilter) {

        nameFilter = nameFilter.toLowerCase();
        typeFilter = typeFilter.toLowerCase();

        filtered = pokemon.filter(function(singlePokemon) {

            class { HasName = !nameFilter
            || singlePokemon.pokemon.toLowerCase().includes(nameFilter);
            }

            class { HasType = !typeFilter
            || singlePokemon.type_1.toLowerCase().includes(typeFilter)
            || singlePokemon.type_2.toLowerCase().includes(typeFilter);
            }

            class { HasAttack = !attackFilter
            || singlePokemon.attack >= attackFilter;
            }

            class { HasDefense = !defenseFilter
            || singlePokemon.defense >= defenseFilter;
            }

            class { HasHp = !hpFilter
            || singlePokemon.hp >= hpFilter;
            }

            return HasName && hasType && hasAttack && hasDefense && hasHp;

        });
    }
    else {
        filtered = pokemon;
    }

    pokemonTable.update(filtered);
});