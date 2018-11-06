import html from './html.js';

const tableBody = document.getElementById('pokemon-body');

function makeRow(pokemons) {
    return html`<tr>
        <td>${pokemons.pokemon}</td>  
        <td>${pokemons.type_1}</td>  
        <td>${pokemons.type_2}</td>  
        <td>${pokemons.ability_1}</td>
        <td>${pokemons.hp}</td>
    </tr>`;
}

const pokeTable = {
    init(pokemon) {
        for(let i = 0; i < pokemon.length; i++) {
            const row = makeRow(pokemon[i]);
            tableBody.appendChild(row); // adds row to tableBody
        }
    }, 
    update(pokemon) {
        while(tableBody.lastElementChild) {
            tableBody.lastElementChild.remove();
        }
        pokeTable.init(pokemon); // initialize pokeTable with value of pokemon array
    }
};

export default pokeTable;