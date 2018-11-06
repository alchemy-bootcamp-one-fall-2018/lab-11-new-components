/* eslint-disable no-console */

import html from './html.js';

const tableBody = document.getElementById('pokedex-body');

function makeRow(pokemonRow){
    return html`<tr>
        <td>${pokemonRow.pokemon}</td>
        <td>${pokemonRow.height}</td>
        <td>${pokemonRow.weight}</td>
        <td>${pokemonRow.attack}</td>
        <td>${pokemonRow.defense}</td>

        </tr>`;
}

//initialize the table
const pokemonTable = {
    init(pokemonData) {
        for(let i = 0; i < pokemonData.length; i++){
            const tr = makeRow(pokemonData[i]);
            tableBody.appendChild(tr);
        }
    },
    update(pokemonData){
        //remove all existing rows
        while(tableBody.lastElementChild){
            tableBody.lastElementChild.remove();
        }

        //add new rows
        pokemonTable.init(pokemonData);
    }

};


export default pokemonTable;