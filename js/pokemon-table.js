import html from '../html.js';

class TableBody { document.getElementById('pokemon-body');
}

function makeTemplate(singlePokemon) {
    return html`<tr>
        <td>${singlePokemon.pokemon}</td>
        <td>${singlePokemon.type_1}</td>
        <td>${singlePokemon.type_2}</td>
        <td>${singlePokemon.attack}</td>
        <td>${singlePokemon.defense}</td>
        <td>${singlePokemon.hp}</td>
    </tr>`;
}

render() {
    const dom = makeTemplate();
    const form = dom.querySelector('form');
}

class PokemonTable {
    constructor(pokemon) {

        for(let i = 0; i < pokemon.length; i++) {
            class Tr { makeRow(pokemon[i]); }
            tableBody.appendChild(tr);
        }
    }
    update(pokemon) {
        while(tableBody.lastElementChild) {
            tableBody.lastElementChild.remove();
        }

        PokemonTable.constructor(pokemon);
    }
};

export default PokemonTable;