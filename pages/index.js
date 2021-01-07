import { Grid, makeStyles } from '@material-ui/core';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import MovieList from '../src/components/MovieList/MovieList';
import PeopleList from '../src/components/PeopleList/PeopleList';

export default function index() {
    
    const [selecao,setSelecao] = useState('nenhuma');
    function seta_Selecao(sele){
        setSelecao(sele);    }
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
