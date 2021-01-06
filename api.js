//importando biblioteca axios
import axios from 'axios';

//http de onde sera consumida
let basURL= process.env.NODE_ENV == 'production'? 
"https://swapi-g4b-proxy.herokuapp.com/":
"https://swapi.dev/api";

let axconfig = { 
    baseURL:basURL
}
//cria conexao com axios
const swapi = axios.create(axconfig);

module.exports={swapi,axios};