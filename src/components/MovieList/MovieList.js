import {swapi} from '../../../api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, ButtonGroup, Paper } from '@material-ui/core';
async function acessarFilmes(eve){
    //eve.preventDefault();
    try {
        const {data} = await swapi.get('/films?page=1'); 
        //setDados(data.results);
        return(data.results);
        //console.log(data.data.results[1].title);  
    } catch (error) {
        console.log(error);
    }
}

const MovieList = ({selected,allFilms,testagem}) =>{

    const [dados,setDados] = useState(allFilms);
    const [todosFilmes,setTodosFilmes] = useState(allFilms);
    const [isLendoInfo,setLendoInfo] = useState(false);
    useEffect(()=>{
        //acessarFilmes();
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
    
    return(<div>        {testagem}
        <h5>-----Clique em um filme para saber os personagens------</h5>
        {
        dados ?
        dados.map(filme=>(
        <Paper elevation={3} variant="elevation"
        onClick={()=>selected(filme.characters)}        
        key={filme.episode_id}>
            <h4>titulo:{filme.title}</h4>
        </Paper>) )
        :
        <h6>nomovie</h6>
        
        }
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
export async function getStaticProps()  {
    console.log('puxando..');
    const _allFilms = await acessarFilmes();
     console.log(allFilms[0].title);

        if (!_allFilms)
           return {props:{testagem:'hojehojehoje'}}

    return {   props: {   allFilms: _allFilms,  },
    };
  };

export default MovieList;