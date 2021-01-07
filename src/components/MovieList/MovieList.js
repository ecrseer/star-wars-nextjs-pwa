import {swapi} from '../../../api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, ButtonGroup, Paper } from '@material-ui/core';

const MovieList = ({selected}) =>{

    const [dados,setDados] = useState([]);
    const [todosFilmes,setTodosFilmes] = useState([]);
    const [isLendoInfo,setLendoInfo] = useState(false);
    useEffect(()=>{
        acessarFilmes();
    },[])

    const filmeInfo = (filme)=>{
        return(<><br/>diretor: {filme.director}
        <br/>produtor: {filme.producer}
        <br/>numero do filme: {filme.episode_id}
        <br/>data de lançamento: {filme.release_date}
        
        </>)
    }
    function stringify (x) {
        console.log(Object.prototype.toString.call(x));
    }
    
    async function acessarFilmes(eve){
        //eve.preventDefault();
        try {
            const {data} = await swapi.get('/films?page=1'); 
            setDados(data.results);
            setTodosFilmes(data.results);
            //console.log(data.data.results[1].title);  
        } catch (error) {
            console.log(error);
        }
    }
    async function mostrarInfo(FilmeBtn){
        if(isLendoInfo){
          setLendoInfo(false);
          setDados(todosFilmes);
        }else{
            let filmeSelecionado = 
                dados.filter(filme=>filme==FilmeBtn);
                console.log(filmeSelecionado[0].title);
            setDados(filmeSelecionado);
            setLendoInfo(true);
        }
    }
    
    return(<div>        
        <h5>-----Clique em um filme para saber os personagens------</h5>
        
        <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="text"
      >
      {dados?
        dados.map(filme=>
        (<Button onClick={()=>{
            mostrarInfo(filme)
            selected(filme.characters)}}        
            key={filme.episode_id}>
                titulo:{filme.title}
                {isLendoInfo?
                (filmeInfo(filme))  
                :<><br/>Clique para mais informacoes</>
                }
        </Button>))
        :<div></div>
      }
      </ButtonGroup>
        
        
        
    </div>)
}

export default MovieList;