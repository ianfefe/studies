import { lista, tamTime} from "./fetch";
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

function showPokedex(player: number, i: number) {
    let nome = lista[i].name;
    let tipos = `${lista[i].types[0].type.name} ${ lista[i].types[1] ? lista[i].types[1].type.name : ''}`
    let imagem = lista[i].sprites.front_default;
    let pokemon = new Pokemon(nome, tipos, imagem)
    let showPokemon = elementFromHTML(pokemon, i)
    document.querySelector(`.table${player}`).appendChild(showPokemon!)
}

function elementFromHTML(pokemon: Pokemon, id:number, player: number){
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

function constroiPlayer(player) {
    if (player == 1) {
        for (let i = 1; i <= tamTime; i++) {
            showPokedex(player, i)
        }
    }else{
        for (let i = tamTime + 1; i <= tamTime*2; i++) {
            showPokedex(player, i)
        }
    }
}

async function pokedexInit(){
    await getLista();
    constroiPlayer(1)
    constroiPlayer(2)
}

pokedexInit()