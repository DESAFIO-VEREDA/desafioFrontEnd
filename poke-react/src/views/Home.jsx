import { AllPokemons, pokemonAPI } from "../api/pokemonAPI"
import { useEffect, useState } from "react"


export const Home = () => {

    const [pokemon, setPokemon] = useState('')
    const [pokeRender, setPokeRender] = useState('')

    async function getPokemon() {
        const api = await pokemonAPI()
        setPokeRender(api.data)
        console.log(pokeRender)
    }

    useEffect(async () => {
        const api = await AllPokemons()
        setPokeRender(api.data)
        console.log(pokeRender)
    }, [])

    return (
        <div>
            <h1>Olá mundo</h1>
            <input type="text"
                onChange={(e) => setPokemon(e.target.value)}
            />
            <button onClick={getPokemon}>Buscar</button>
            <section>
                {pokeRender&&pokeRender?.results.map((pokemon, key)=> {
                    return (
                        <div key={key}>
                            <p>{pokemon.name}</p>
                        </div>
                    )        
                })}
            </section>
        </div>
        
    )
}