import {swapi} from '../../../api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';

const PeopleList = ({selected}) =>{

    const [dados,setDados] = useState([]);
    const [personagens,setPersonagens] = useState(['','2']);
    useEffect(()=>{  
        a_a(selected)      
    },
    [selected])

async function acessarPersonagens(eve){    
    try {
        const {data} = await swapi.get('/films?page=1'); 
        setDados(data.results);
        //console.log(data.data.results[1].title);       
        
    } catch (error) {
        console.log(error);
    }
}
async function ars(){
    setPersonagens(
    selected.map(url=>{
        url+"mod"
    }));
}
async function a_a(arrLinks){    
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
const cardPersonagem = (nome,index)=>{
    return(<Paper elevation={3}
        variant="elevation"                
           key={index}>
               <h4>nome:{nome}</h4>
           </Paper>)
}
return(
<div>
 <button onClick={()=>{a_a(selected)}}>a-a</button>
 {dados?
     dados.map((personagem,index)=>{    
    return(cardPersonagem(personagem.name,index))    
 })
 :
 (<div></div>)
 }
</div>)
}
export default PeopleList;
