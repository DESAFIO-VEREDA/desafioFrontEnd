import styled from "styled-components"

export const PokeCard = styled.div`
    background-color:${({pokemonType})=>pokemonType};
    display: flex;
    flex-direction: column;
    width: 180px;
    height: 150px;
    margin: 10px;
    padding: 0;
    border: none;
    border-radius: 10px;
    color: white;
    .pokeId {
        margin-left: 150px;
        color: rgba(0, 0, 0, 0.3);
    }
    .content {
        display: flex;
    }
    .pokeInfos {
        width: 100px;
        margin: 0 8px;
    }
    .typesList {
        display: flex;
        flex-direction: column;
        gap: 2px;
        
    }
    .pokePhoto {
        width: 80px;
    }
    h2 {
        font-size: 16px;
    }
    .pokeTypes {
        width: 60px;
        font-size: 14px;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 6px;
    }
    transition: transform 0.4s;
    :hover{
        transform: scale(105%);
    }
`