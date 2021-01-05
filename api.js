//importando biblioteca axios
import axios from 'axios';

//http de onde sera consumida
let basURL="https://swapi.dev/api/";

let axconfig = { 
    baseURL:basURL
}
//cria conexao com axios
const swapi = axios.create(axconfig);

export default swapi;