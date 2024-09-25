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

function showPokedex(player: number, i: number, funcao: number) {
    let nome = lista[i].name;
    let tipos = `${lista[i].types[0].type.name} ${ lista[i].types[1] ? lista[i].types[1].type.name : ''}`
    let imagem = lista[i].sprites.front_default;
    let pokemon = new Pokemon(nome, tipos, imagem)
    let showPokemon = elementFromHTML(pokemon, i)

    if (funcao == 1)
        document.querySelector(`.cards${player}`).appendChild(showPokemon!)
    else
        document.querySelector(`.void-cards`).appendChild(showPokemon!)
}

function elementFromHTML(pokemon: Pokemon, id:number){
    const template = document.createElement('template');

    template.innerHTML = `  <div class='poke-container' id="${id}">
                                <div class="name">${pokemon.name}</div>
                                    <img src="${pokemon.image}" class="imagem" alt="${pokemon.name} image">
                                    <div class="tipos">
                                        <div class="type">${pokemon.types}</div>
                                        </div>
                            </div>`;


    return template.content.firstElementChild;
}

function clique(event){
    let id = event.target.id
    console.log(id)
    const player = event.target.parentElement
    if(player == 'cards1')
        showPokedex(1, id, 2)
    else
        showPokedex(2, id, 2)
}

function setClick() {
    let cartas = document.querySelectorAll('.poke-container')
    cartas.forEach(cartas => {
        cartas.addEventListener("click", clique)
    })
}

function constroiPlayer(player: number) {
    if (player == 1) {
        for (let i = 1; i <= tamTime; i++) {
            showPokedex(player, i, 1)
        }
    }else{
        for (let i = tamTime + 1; i <= tamTime*2; i++) {
            showPokedex(player, i, 1)
        }
    }
}

async function pokedexInit(){
    await getLista();
    constroiPlayer(1);
    constroiPlayer(2);
    setClick()    
}

pokedexInit()

