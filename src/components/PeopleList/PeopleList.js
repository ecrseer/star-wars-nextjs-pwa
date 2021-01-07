import {swapi} from '../../../api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, Paper } from '@material-ui/core';

const PeopleList = ({selected}) =>{

    const [dados,setDados] = useState([]);
    const [personagens,setPersonagens] = useState(['','2']);

    useEffect(()=>{  
        acessaPersonagens(selected)      
    },
    [selected])



async function acessaPersonagens(arrLinks){    
    let arr = arrLinks;
    setDados([]);
    for (var i = 0; i < arr.length; i++) {
        try{
            const {data} = await axios.get(arr[i]);
            
            setDados(dados => [...dados, data]);
        }catch(erro){
          console.log(erro);
      }
    }
    

}
const cardPersonagem = (personagem,index)=>{
    return(<Paper elevation={3}
        variant="elevation" 
        style={{paddingLeft:'12px'}}               
           key={index}>
               <h4>{personagem.name}</h4>
               <h6>altura: {personagem.height}</h6>
               <h6>massa: {personagem.mass}</h6>
               <h6>cor do cabelo: {personagem.hair_color}</h6>
               <h6>cor da pele: {personagem.skin_color}</h6>
               <h6>cor dos olhos: {personagem.eye_color}</h6>
               <h6>data de nascimento: {personagem.birth_year}</h6>
               <h6>genero: {personagem.gender}</h6>
               
           </Paper>)
}
return(
<div> 
        {dados?
            dados.map((personagem,index)=>{    
            return(cardPersonagem(personagem,index))    
        })
        :
        (<div></div>)
        }
 
</div>)
}
export default PeopleList;
