import {swapi} from '../../../api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';

const MovieList = ({selected}) =>{

    const [dados,setDados] = useState(false);
    
    useEffect(()=>{
        acessarTeste();
    },[])

     
    function stringify (x) {
        console.log(Object.prototype.toString.call(x));
    }
    
    async function acessarTeste(eve){
        //eve.preventDefault();
        try {
            const data = await swapi.get('/films?page=1'); 
            setDados(data.data.results);
            //console.log(data.data.results[1].title);            
            
        } catch (error) {
            console.log(error);
        }
    }
    
    return(<div>        
        <h5>-----Clique em um filme para saber os personagens------</h5>
        {
        dados ?
        dados.map(filme=>(
        <Paper variant="outlined" square 
        onClick={()=>selected(filme.title)}        
        key={filme.episode_id}>
            <h6>titulo:{filme.title}</h6>
        </Paper>) )
        :
        <h6>nomovie</h6>
        
        }
        
        
        
    </div>)
}

export default MovieList;