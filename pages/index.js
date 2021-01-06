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
     <Grid>
        <MovieList selected={seta_Selecao}/>
    </Grid>   
        <h5>Selecao eh:{selecao}</h5>
    </>
    );
    
}
