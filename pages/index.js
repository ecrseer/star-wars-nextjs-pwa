import Head from 'next/head';

import { useEffect, useState } from 'react';
import swapi from '../api';



export default function index() {
    async function acessarFilmes(){
        try{
        const {data} = await swapi.get('/films/1',{headers:{
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Authorization", 
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
            "Content-Type": "application/json;charset=UTF-8"  
        }
        });
            setDados(''+data.title);
            console.log(dados);
        }catch(er){
            console.log(er);
        }
    }


    const [dados,setDados] = useState('...');

    useEffect(()=>{
        acessarFilmes();
    })

    return(
    <div>        
        <h1 >Starwars</h1>
        <h2>{dados}</h2>
    </div>
    );
}
