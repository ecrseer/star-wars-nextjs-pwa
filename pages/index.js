import Head from 'next/head';

import { useEffect, useState } from 'react';
import swapi from '../api';

export default function index() {
    const [dados,setDados] = useState('...');

    useEffect(async()=>{
        try{
        const {data} = await swapi.get('/films/1');
            setDados(''+data.title);
            console.log(dados);
        }catch(er){
            console.log(er);
        }
    })

    return(
    <div>        
        <h1 >Starwars</h1>
        <h2>{dados}</h2>
    </div>
    );
}
