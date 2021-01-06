import { Grid } from '@material-ui/core';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import MovieList from '../src/components/MovieList/MovieList';



export default function index() {
    const [selecao,setSelecao] = useState('nenhuma');
    function seta_Selecao(sele){
        setSelecao(sele);
    }
    return(
    <>    
    <Grid container spacing={0}>          
    <Grid item xs={12} sm={6} md={6} lg={6}>       
        <MovieList selected={seta_Selecao}/>
     </Grid>   
     <Grid item xs={12} sm={6} md={6}  lg={6} >
     <div>
        <h5>Selecao eh:{selecao}</h5>
        </div>
    </Grid>
    </Grid>
    </>
    );
    
}
