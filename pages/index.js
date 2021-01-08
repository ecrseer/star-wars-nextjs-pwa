import { Grid, makeStyles } from '@material-ui/core';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import MovieList from '../src/components/MovieList/MovieList';
import PeopleList from '../src/components/PeopleList/PeopleList';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      
    }, 
    filmes:{
        alignItems:'center',
        justifySelf: 'right'
    }
  }));

export default function index() {

    const [selecao,setSelecao] = useState([]);
    function seta_Selecao(sele){
        setSelecao(sele);    }


    const classes = useStyles();

    return(
    <div className={classes.root}>    
    
       
        <MovieList selected={seta_Selecao} className={classes.filmes}/>
     
         
                
        <PeopleList personagensfilme={selecao} 
        className={classes.root}/>
        
    
    </div>
    );
    
}
