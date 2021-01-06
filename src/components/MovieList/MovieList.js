import {swapi} from '../../../api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';

const MovieList = ({selected}) =>{

    const [dados,setDados] = useState('...');
    useEffect(()=>{
        
    })

     
    function stringify (x) {
        console.log(Object.prototype.toString.call(x));
    }
    
    async function acessarTeste(eve){
        eve.preventDefault();
        try {
            const data = await swapi.get('/films?page=1'); 
            setDados(data.data.results[0]);
            console.log(data.data.results[1].title);
            selected(data.data.results[1].title);
            
        } catch (error) {
            console.log(error);
        }
    }
    
    return(<div>        
        <h1>Starwars Netlify</h1>        
            <h2>{dados.title}</h2>
            <form onSubmit={acessarTeste}>
            <button >aa</button>        
        </form>
        <img src="#"></img>
        <h1>-----------</h1>
        <Paper variant="outlined" square>
            <h6>subtitulo</h6>
        </Paper>
        
        
        
    </div>)
}

export default MovieList;