import axios from 'axios'

export async function pokemonAPI() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=151&limit=302)'
    try {
        const resp = axios.get(url)

    }catch(err) {
        console.log('erro API', err)
    }
}