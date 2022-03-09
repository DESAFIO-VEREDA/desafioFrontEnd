import axios from "axios";

const typesApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/type"
});

export default typesApi;