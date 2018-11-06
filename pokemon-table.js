import html from './html.js';
function makeTemplate() {
    return html`

    <form id=add-form>
        <h2>Search for Pokemon</h2>
        <label>
            Name:
            <input id="filter-name">
        </label>
        <label>
            Type:
            <input id="filter-type">
        </label>
        <label>
            Type2:
            <input id="filter-type2">
        </label>
        <label>
            Attack:
        <input type="number" id="filter-attack">
        </label>
        <label>
            Defense:
            <input type="number" required id="filter-defense">
        </label>
    </form>
    `;
}


const tableBody = document.getElementById('pokemon.body');

function makePokemon(pokemon) {

    return html`
        <tr>
            <td>${pokemon.color_1}</td>
            <td>${pokemon.speed}</td>
            <td>${pokemon.pokemon}</td>
            <td>${pokemon.type_1}</td>
            <td>${pokemon.type_2}</td>
            <td>${pokemon.attack}</td>
            <td>${pokemon.defense}</td>
            <td>${pokemon.shape}</td>
        </tr>`;
}


class PokemonTable {
    constructor(onAdd) {
        this.onAdd = onAdd
    }
        render(); {

        constructor(pokemon) {

            for(let i = 0; i < pokemon.length; i++) {
                const tr = makePokemon(pokemon[i]);
                tableBody.appendChild(tr);
            }
        }
        update(pokemon) {
            while(tableBody.lastElementChild) {
                tableBody.lastElementChild.remove();
            }
            PokemonTable.constructor(pokemon);

        }
        render() {
            const dom = makeTemplate
        }
    }
}
export default PokemonTable;