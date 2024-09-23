const pokeURL = 'https://pokeapi.co/api/v2/pokemon/';
const numero = 10;

export const lista:any = [];

export async function getLista() {
    for (let i = 1; i <= numero; i++) {
        let resp = await getPokemon(i)
        lista[i] = resp
    }
};

async function getPokemon(index: number) {
    const resp = await fetch(`${pokeURL}${index}`)
    if (resp.status == 200){
        const obj = await resp.json()
        return obj
    }
}