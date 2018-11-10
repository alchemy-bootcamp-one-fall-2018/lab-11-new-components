import html from './html.js';

function makeTemplate(pokemon) {
    var info = '';

    pokemon.forEach(item => {
        info += `
            <tr>
                <td><img src="assets/pokemon/${item.id}.png"></td>
                <td>${item.pokemon}</td>
                <td>${item.type_1}</td>
                <td>${item.type_2}</td>
                <td>${item.weight}</td>
                <td>${item.height}</td>
                <td>${item.attack}</td>
            </tr>
        `;
    });

    return html`
        <h2>Pokemons:</h2>
        <table id="pokeTable">
            <tr>
                <th>Image</th>
                <th>Pokemon Name</th>
                <th>Type_1</th>
                <th>Type_2</th>
                <th>Weight</th>
                <th>Height</th>
                <th>Attack</th>
            </tr>
            ${info}
        </table>
        `;
}

class GenerateTable {
    constructor(pokemon) {
        this.pokemon = pokemon;
    }
       
    render() {
        const dom = makeTemplate(this.pokemon);

        // this.pokemon.forEach(item => {
        //     html += `
        //         <tr>
        //             <td><img src="assets/pokemon/${item.id}.png"></td>
        //             <td>${item.pokemon}</td>
        //             <td>${item.type_1}</td>
        //             <td>${item.type_2}</td>
        //             <td>${item.weight}</td>
        //             <td>${item.height}</td>
        //             <td>${item.attack}</td>
        //         </tr>
        //     `;
        // });
        return dom;
    }
}

export default GenerateTable;