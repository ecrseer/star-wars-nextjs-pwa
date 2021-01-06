import {swapi} from '../../../api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';

const PeopleList = ({selected}) =>{

    const [dados,setDados] = useState(['...']);
    const [personagens,setPersonagens] = useState(['','2']);
    useEffect(()=>{        
    },
    [])

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
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }

    try {
        const {data} = await axios.get("http://swapi.dev/api/people/1/")
        setDados(data.name); 
        //console.log(data.data.results[1].title);       
        
    } catch (error) {
        console.log(error);
    }
}
return(
<div>
dados é <h1>{dados[0]}</h1>
 <button onClick={()=>{a_a(selected)}}>a-a</button>
</div>)
}
export default PeopleList;
