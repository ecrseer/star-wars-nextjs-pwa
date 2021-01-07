//importando biblioteca axios
import axios from 'axios';

//http de onde sera consumida as imagens
let basURL= "https://raw.githubusercontent.com/akabab/starwars-api/master/api/";

let axconfig = { 
    baseURL:basURL
}
//cria conexao com axios
const PersonagemImgApi = axios.create(axconfig);

module.exports={PersonagemImgApi};