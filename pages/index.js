import { Grid, makeStyles } from '@material-ui/core';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import MovieList from '../src/components/MovieList/MovieList';
import PeopleList from '../src/components/PeopleList/PeopleList';


const useStyles = makeStyles((theme) => ({
    
    root: {
      /* flex para fazer os cards de
         personagens preencher o resto do espaço*/  
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      
    }, 
    filmes:{
        
    }
  }));

export default function index() {

    /* estado utilizado para armazenar o array de personagens
         que será pesquisado pelo respectivo componente no axios
     */
    const [selecao,setSelecao] = useState([]);

    /* funcao que possibilita manipular esse estado
     em outro componente */
    function seta_Selecao(sele){
        setSelecao(sele);    }


    /* utiliza o css do material ui declarado acima */
    const classes = useStyles();

    return(
        /* classname utilizando o css declarado acima */
    <div className={classes.root}>    
        {/* entregando state do index como prop dentro da funcao */}
        <MovieList selected={seta_Selecao} className={classes.filmes}/>  

        {/* consumindo o array passado pelo 
          MovieList passando-o como prop
         */}              
        <PeopleList personagensfilme={selecao} 
        className={classes.root}/>     
    
    </div>
    );
    
}
