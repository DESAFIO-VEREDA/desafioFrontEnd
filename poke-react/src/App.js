import { Card } from "./components/Card/Card";

function App() {

  const pokemons = [
    {
      pokeName: 'Bulbasaur',
      id: 1,
      pokeTypes: ['Grass', 'Poison'],
      pokePhoto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    {
      pokeName: 'Charmander',
      id: 4,
      pokeTypes: ['Fire'],
      pokePhoto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
    }
    ];
  return (
    <div>
      <h2>Pokemon API</h2>
      {pokemons.map(pokemon => {
        return (
          <Card {...pokemon} />
          
        )
      })}
    </div>
  );
}

export default App;
