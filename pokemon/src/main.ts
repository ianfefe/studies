import { lista } from "./fetch";
import { getLista } from "./fetch";

class Pokemon {
    constructor(name: string, types: string, image: string){
        this.name = name;
        this.types = types;
        this.image = image;
    };
    name: string;
    types: string;
    image: string;
}

function showPokedex() {
    for (let i = 1; i <= 10; i++) {
            let nome = lista[i].name;
            let tipos = `${lista[i].types[0].type.name} ${ lista[i].types[1] ? lista[i].types[1].type.name : ''}`
            let imagem = lista[i].sprites.front_default;
    
            let pokemon = new Pokemon(nome, tipos, imagem)
            let showPokemon = elementFromHTML(pokemon)
            document.body.appendChild(showPokemon!)
    }
}

function elementFromHTML(pokemon: Pokemon){
    const template = document.createElement('template');

    template.innerHTML = `  <div class='poke-container'>
                                <div class="name">${pokemon.name}</div>
                                    <img src="${pokemon.image}" class="imagem" alt="${pokemon.name} image">
                                    <div class="tipos">
                                        <div class="type">${pokemon.types}</div>
                                        </div>
                            </div>`;

    return template.content.firstElementChild;
}

async function pokedexInit(){
    await getLista();
    showPokedex();
}

pokedexInit()
