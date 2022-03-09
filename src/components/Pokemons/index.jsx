import { useEffect, useState } from "react"

import "./styles.scss";

import pokeApi from "../../services/pokemons";
import typesApi from "../../services/types";

export function Pokemons() {
    const [pokemons, setPokemons] = useState([]);
    const [types, setTypes] = useState([]);

    function fetchPokemon() {
        pokeApi.get("?offset=0&limit=151")
            .then((response) => setPokemons(response.data.results));
    }

    function fetchTypes() {
        typesApi.get("/")
            .then((response) => setTypes(response.data.results))
            .then(() => {

            })
    }

    useEffect(() => {
        fetchPokemon();
        fetchTypes();
    }, []);

    return (
        <section className="container">
            <ul className="pokemon__list">
                {pokemons.map((pokemon) => (
                    <li className="pokemon__items" key={Math.random()}>{(pokemon.name).charAt(0).toUpperCase() + pokemon.name.slice(1)}</li>
                ))}
            </ul>            
        </section>
    )
}