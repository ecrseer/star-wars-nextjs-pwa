import { Grid, makeStyles } from '@material-ui/core';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import MovieList from '../src/components/MovieList/MovieList';
import PeopleList from '../src/components/PeopleList/PeopleList';


const useStyles = makeStyles((theme) => ({
    
    root: {
      /* grid para fazer os cards de
         personagens preencher o resto do espaço*/  
         display: 'grid',
         gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
         gridGap: '20px',
         margin: '20px',
      
      
    }, 
    filmes:{
        gridColumn: 'span 2',
        
    }
  }));

export default function index() {

    /* estado utilizado para armazenar o array de personagens
         que será pesquisado pelo respectivo componente no axios
     */
    const [arrPersonagensNoFilme,setArrPersonagensNoFilme] = useState([]);
    useEffect(()=>{
        console.log('arrPersonagensNoFilme[0].name')
    },[arrPersonagensNoFilme])
    /* funcao que possibilita manipular esse estado
     em outro componente */
    function seta_arrPersonagensNoFilme(psnagens){
        setArrPersonagensNoFilme(psnagens);    }


    /* utiliza o css do material ui declarado acima */
    const classes = useStyles();

    return(
    
        /* classname utilizando o css declarado acima  */
    <div className={classes.root}>    

        

        {/* entregando state do index como prop dentro da funcao */}
        <MovieList setPNoFilme={seta_arrPersonagensNoFilme} className={classes.filmes}/>  
        
    
        {/* consumindo o array passado pelo 
          MovieList passando-o como prop
         */}
        <PeopleList personagensfilme={arrPersonagensNoFilme} 
        />     
        
    
    </div>
    
    );
    
}
