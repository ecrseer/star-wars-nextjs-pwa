//importando biblioteca axios
import axios from "axios";

let basURL = "https://swapi.dev/api";

let axconfig = {
  baseURL: basURL,
};
//cria conexao com axios
const swapi = axios.create(axconfig);

module.exports = { swapi, axios };
