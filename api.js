//importando biblioteca axios
import axios from 'axios';

//http de onde sera consumida
/* tive que fazer um proxy pra poderbypassar
 o problema de cross origin no deploy pra vercel */
let basURL= process.env.NODE_ENV == 'production'? 
"https://swapi-g4b-proxy.herokuapp.com/":
"https://swapi.dev/api";

let axconfig = { 
    baseURL:basURL
}
//cria conexao com axios
const swapi = axios.create(axconfig);

module.exports={swapi,axios};