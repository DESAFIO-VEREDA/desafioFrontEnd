import { useEffect, useState } from "react";
import { PokeCard } from "./style";

export function Card(pokemon) {
    const pokeType = pokemon.pokeTypes[0];
    const [cardColor, setCardColor] = useState('red');
    useEffect(()=>{
        if (pokeType === 'Grass') {
            setCardColor('#66ff66')
        }
        else if (pokeType === 'Fire') {
            setCardColor('#ff2b30')
        }
        else if (pokeType === 'Water') {
            setCardColor('#3781f2')
        }
        else {
            setCardColor('#9933ff')
        }
    },[])
    // const typesList = [
    //     "normal",
    //     "fighting",
    //     "flying",
    //     "poison",
    //     "ground",
    //     "rock",
    //     "bug",
    //     "ghost",
    //     "steel",
    //     "fire",
    //     "water",
    //     "grass",
    //     "electric",
    //     "psychic",
    //     "ice",
    //     "dragon",
    //     "dark",
    //     "fairy",
    //     "unknown",
    //     "shadow"]

    return (
        <PokeCard pokemonType={cardColor}>
            <span className="pokeId">
                #{pokemon.id}
            </span>

            <div className="content">
            <div className="pokeInfos">
            <h2>{pokemon.pokeName}</h2>
            <div className="typesList" >
            {pokemon.pokeTypes.map(type => {
                return (
                    <span className="pokeTypes">{type}</span>
                )
        })}
            </div>
            </div>
            <div className="pokePhoto">
                <img src={pokemon.pokePhoto} />
            </div>
            </div>
        </PokeCard>
    )
}