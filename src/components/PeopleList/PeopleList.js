import {swapi} from '../../../api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';

const PeopleList = ({selected}) =>{

    const [dados,setDados] = useState('...');
    useEffect(()=>{
        
    })
async function acessarTeste(eve){
    eve.preventDefault();
    try {
        const data = await swapi.get('/films?page=1'); 
        setDados(data.data.results);
        //console.log(data.data.results[1].title);
        
        
    } catch (error) {
        console.log(error);
    }
}
return(<h5>ma peop</h5>)
}
export default PeopleList;
