import axios from 'axios'

export async function pokemonAPI(name_id) {
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=1&limit=302)'
    try {
        const resp = await axios.get(url)
        return resp

    }catch(err) {
        console.log('erro API', err)
    }
}


export async function AllPokemons() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=1)'
    try {
        const resp = await axios.get(url)
        return resp

    }catch(err) {
        console.log('erro API', err)
    }
}