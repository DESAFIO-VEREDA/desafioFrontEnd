

export const Home = () => {

    const [pokemon, setPokemon] = useState('')

    async function getPokemon() {
        
    }

    return (
        <div>
            <h1>Olá mundo</h1>
            <input type="text"
                onChange={(e) => setPokemon(e.target.value)}
            />

            <button onClick={getPokemon}>Buscar</button>
        </div>
        
    )
}