import './styles/home.scss'
import {GetProperties} from './Home'

export function App() {
  const data = GetProperties();
  return (
    <div className="App">
      <div className="Cards">
        <div className="Card">
          <div>
            <h1>Bulbasaur</h1>
            <p className='Properties'></p>
            <p className='Properties'>Poison</p>
          </div> 
          <div className='imgBackground'>
            <div>
              <div className='id'>
                <p>#001</p>
              </div>
             <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Ilustração Bulbasaur" />  
            </div>
          </div> 
        </div>  
      </div>
    </div>
  );
}

export default App;
