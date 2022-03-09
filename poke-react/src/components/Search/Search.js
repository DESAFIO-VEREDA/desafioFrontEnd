import React from "react";
import {SearchPoke} from './style';
import Lupa from '../../pictures/lupa.png'

function Search () {
    return (
        <SearchPoke>
            <input type="text" id="txtBusca"/> 
            <img src={Lupa} alt="lupa" />
            </SearchPoke>

    )
}

export default Search;