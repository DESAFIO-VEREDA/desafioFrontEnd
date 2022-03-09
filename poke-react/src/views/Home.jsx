import { AllPokemons, pokemonAPI } from "../api/pokemonAPI"
import { useEffect, useState } from "react"
import { Container } from "../components/assets/styled-Home"


export const Home = () => {

    const [pokemon, setPokemon] = useState('')
    const [singlePoke, setSinglePoke] = useState('')
    const [pokeRender, setPokeRender] = useState('')

    async function getPokemon() {
        const api = await pokemonAPI(pokemon)
        setSinglePoke(api.data)
        console.log(singlePoke)
    }

    async function renderAllPokes() {
        const api = await AllPokemons()
        setPokeRender(api)
        console.log(pokeRender)
    }

    useEffect(() => {
        renderAllPokes()
    }, [])

    return (
        <div>
            <h1>Pokédex</h1>
            <input type="text"
                onChange={(e) => setPokemon(e.target.value)}
            />
            <button onClick={getPokemon}>Buscar</button>
            {singlePoke === '' ? 
            
            <Container>
                {pokeRender&&pokeRender.map((pokemon, key)=> {
                    let path = pokemon?.data
                    return (
                        <div key={key}>
                            <p>{path.id}</p>
                            <p>{path.name}</p>
                            <p>{path.types[0].type.name}</p>
                        </div>
                    )        
                })}
            </Container> 
            
            : 
            <Container>
                <div>
                    <p>{singlePoke.id}</p>
                    <p>{singlePoke.name}</p>
                    <p>{singlePoke.types[0].type.name}</p>
                </div>
            </Container>}
        </div>
        
    )
}