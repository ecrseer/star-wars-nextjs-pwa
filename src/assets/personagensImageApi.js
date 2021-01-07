//importando biblioteca axios
import axios from 'axios';

//http de onde sera consumida as imagens
let basURL= "https://private-anon-f31303ce21-starhub.apiary-mock.com/api/";

let axconfig = { 
    baseURL:basURL
}
//cria conexao com axios
const PersonagemImgApi = axios.create(axconfig);

module.exports={PersonagemImgApi};