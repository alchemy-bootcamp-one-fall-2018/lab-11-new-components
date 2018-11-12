import PokeApi from './pokemon-api.js';
import GenerateTable from './poke-table.js';
import html from './html.js';

var Pokemon = new PokeApi;

function makeTemplate() {
    return html`
        <section id="search">
            <select>
                <option name="selectText" value="pokemon">Pokemon Name</option>
                <option name="selectText" value="type_1">Type_1</option>
                <option name="selectText" value="type_2">Type_2</option>
            </select>
            <input type="text" id="textBox" placeholder="text">

            <select>
                <option name="selectNum" value="weight" value="1">Weight</option>
                <option name="selectNum" value="height" value="1">Height</option>
                <option name="selectNum" value="attack" value="1">Attack</option>
            </select>
            <input type="number" id="numBox" placeholder="minimum value">
        </section>
    `;
}

class Filter {
    constructor() {
        this.pokemon = Pokemon.getAll();
    }
    
    render() {
        const dom = makeTemplate();
        const search = dom.getElementById('search');
        
        search.addEventListener('keyup', () => {
            let filtered = [];
            let selText = document.querySelector('option[name="selectText"]:checked');
            let selNum = document.querySelector('option[name="selectNum"]:checked');
            let textBox = document.getElementById('textBox');
            let numBox = document.getElementById('numBox');
            let compareNum = '0';

            if(numBox.value){
                compareNum = numBox.value;
            }

            if(textBox.value === '' && numBox.value === ''){
                filtered = this.pokemon;
            } else {
                this.pokemon.forEach(item => {
                    if(item[selText.value].includes(textBox.value) && item[selNum.value] >= parseInt(compareNum)) {
                        filtered.push(item);
                    }
                });
            }

            var filteredResult = new GenerateTable(filtered);
            const root = document.getElementById('root');
            for(let i = root.childNodes.length - 1; i > 3; i--) {
                root.removeChild(root.childNodes[i]);
            }
            root.appendChild(filteredResult.render());
        });


        return dom;
    }
}

export default Filter;