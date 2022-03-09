import { useState } from "react";

import "./styles.scss"

export function Search() {
    const [search, setSearch] = useState("");

    const handleChange = (text) => {
        setSearch(text.target.value);
    }

    return (
        <section className="searchbar">
                <input className="searchbar__input" type="text" name="pokemonSearch" onChange={handleChange} />
        </section>
    )
}