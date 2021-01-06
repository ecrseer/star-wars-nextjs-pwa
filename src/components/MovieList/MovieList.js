import {swapi} from '../../../api';
import axios from 'axios';
import { useEffect, useState } from 'react';

const MovieList = ({data}) =>{

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
            setDados(data.count);
            console.log(data.data.results[1].title);
        } catch (error) {
            console.log(error);
        }
    }
    
    return(<div>        
        <h1>Starwars Netlify</h1>        
            <h2>{dados}</h2>
            <form onSubmit={acessarTeste}>
            <button >aa</button>        
        </form>
        <img src="#"></img>
        
        
        
    </div>)
}

export default MovieList;