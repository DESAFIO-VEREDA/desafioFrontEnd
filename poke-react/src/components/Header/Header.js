import React from "react";
import {HeaderPoke} from './style'
import Picture from '../../pictures/imgHeader.png';
import Picture2 from '../../pictures/pokeball.png';


function Header() {
    return (
    <div>
        <img src={Picture} alt="header"/>
        <HeaderPoke src={Picture2}>
                        
        </HeaderPoke>
    </div>
    )
}

export default Header;
