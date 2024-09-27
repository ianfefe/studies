import { lista, teamSize, getLista } from "./fetch";

let contadorP1 = 0, contadorP2 = 1;

class Pokemon {
    constructor(name: string, types: string, image: string) {
        this.name = name;
        this.types = types;
        this.image = image;
    };
    name: string;
    types: string;
    image: string;
}

function showPokedex(player: number, i: number) {
    let n = lista[i].name;
    let t = `${lista[i].types[0].type.name} ${lista[i].types[1] ? lista[i].types[1].type.name : ''}`;
    let img = lista[i].sprites.front_default;
    let pokemon = new Pokemon(n, t, img)
    let showPokemon = elementFromHTML(pokemon, i)

    document.querySelector(`.cards${player}`).appendChild(showPokemon!)
}

function elementFromHTML(pokemon: Pokemon, id: number) {
    const template = document.createElement('template');

    template.innerHTML = `  <div class='poke-container' id="${id}">
                                <div class="name">${pokemon.name}</div>
                                    <img src="${pokemon.image}" class="image" alt="${pokemon.name} image">
                                    <div class="tipos">
                                        <div class="type">${pokemon.types}</div>
                                        </div>
                            </div>`;


    return template.content.firstElementChild;
}

function fillVoid(event) {
    let selected = event.target.closest('.poke-container')
    let id = selected.id
    let selectedPlayer = selected.parentElement
    let voidCards = document.querySelector('.void-cards')
    let p1 = document.querySelector('.cards1')
    let p2 = document.querySelector('.cards2')


    if (voidCards.childElementCount < teamSize*2) {
        if (selectedPlayer == p1) {
            if (contadorP1 < contadorP2) {
                voidCards.appendChild(document.getElementById(`${id}`))
                contadorP1++
            }
        } else if (selectedPlayer == p2){
            if (contadorP2 == contadorP1) {
                voidCards.appendChild(document.getElementById(`${id}`))
                contadorP2++
            }
        }
    }
}

function setClick() {
    let decks = document.querySelectorAll('.poke-container')
    decks.forEach(card => {
        card.addEventListener("click", fillVoid)
    })
}

function buildPlayer(player: number) {
    if (player == 1) {
        for (let i = 1; i <= teamSize; i++) {
            showPokedex(player, i)
        }
    } else {
        for (let i = teamSize + 1; i <= teamSize * 2; i++) {
            showPokedex(player, i)
        }
    }
}

async function pokedexInit() {
    await getLista();
    buildPlayer(1);
    buildPlayer(2);
    setClick()
}

pokedexInit()