import PokeApi from './pokemon-api.js';
import GenerateTable from './poke-table.js';
import Filter from './pokemon-filter.js';

const root = document.getElementById('root');

var pokemon = new PokeApi;
pokemon = pokemon.getAll();

const filterCall = new Filter;
root.appendChild(filterCall.render());

const genTable = new GenerateTable(pokemon);
root.appendChild(genTable.render());
