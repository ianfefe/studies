const pokeURL = 'https://pokeapi.co/api/v2/pokemon/';

export const teamSize = 5;
const cartas = teamSize*2;

export const lista:any = [];

export async function getLista() {
    for (let i = 1; i <= cartas; i++) {
        let random = Math.floor(Math.random() * 1302 + 1)

        if (random <= 1025) {
            let resp = await getPokemon(random)
            lista[i] = resp
        }else{
            let resp = await getPokemon(random+8976)
            lista[i] = resp
        }

    }
};

async function getPokemon(index: number) {
    const resp = await fetch(`${pokeURL}${index}`)
    if (resp.status == 200){
        const obj = await resp.json()
        return obj
    }
}