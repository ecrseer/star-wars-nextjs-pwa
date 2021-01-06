//importando biblioteca axios
import axios from 'axios';

//http de onde sera consumida
let basURL= //process.env.NODE_ENV == 'production'? ""+process.env.MY_SWAPI :
"/";

let axconfig = { 
    baseURL:basURL
}
//cria conexao com axios
const swapi = axios.create(axconfig);

module.exports={swapi,axios};