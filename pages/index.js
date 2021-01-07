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
      backgroundColor: theme.palette.background.paper,
    }, 
  }));

export default function index() {

    const [selecao,setSelecao] = useState([]);
    function seta_Selecao(sele){
        setSelecao(sele);    }


    const classes = useStyles();

    return(
    <div >    
    <Grid container spacing={3}     
    >          
    <Grid item xs={12} sm={6} md={6} lg={6}>       
        <MovieList selected={seta_Selecao}/>
     </Grid>   
     <Grid item xs={12} sm={6} md={6}  lg={2} >
     <div>
        
        <PeopleList selected={selecao}/>
        </div>
    </Grid>
    </Grid>
    </div>
    );
    
}
