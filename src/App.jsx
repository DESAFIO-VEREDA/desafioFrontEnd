import { Header } from './components/Header'
import { Pokemons } from './components/Pokemons'
import { Search } from './components/Search'
import { Title } from './components/Title'

import "./reset.scss";

function App() {
  return (
    <div>
      <Header />
      <Search />
      <Title title={"Pokédex"}/>
      <Pokemons />
    </div>
  )
}

export default App
