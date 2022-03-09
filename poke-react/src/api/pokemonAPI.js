import axios from 'axios'

export async function pokemonAPI(name_id) {
    console.log(name_id)
    const url = `https://pokeapi.co/api/v2/pokemon/${name_id}/`
    try {
        const resp = await axios.get(url)
        return resp

    }catch(err) {
        console.log('erro API', err)
    }
}


export async function AllPokemons() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=151&limit=302'
    try {
        const req = await axios.get(url)
        if(req.status === 200) {
            let pokemons = []
            req.data.results.forEach(async (poke) => {
                const resp = await axios.get(poke.url)
                pokemons.push(resp)
            })
            
            return pokemons
        }

    }catch(err) {
        console.log('erro API', err)
    }
}