import axios from 'axios';

export async function GetProperties() {
    const returnData = await axios.get('https://pokeapi.co/api/v2/type/');
    console.log(returnData.data.results)
}