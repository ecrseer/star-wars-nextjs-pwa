import swapi from '../../../api';
import { useEffect, useState } from 'react';

const GridList = () =>{

const [dados,setDados] = useState('...');
    useEffect(()=>{
        
    })

    

    async function acessarFilmes(){
        console.log("DD "+process.env.NODE_ENV);
            console.log("SWW "+process.env.MY_SWAPI);
        try{
        const {data} = await swapi.get('/films/2',{
            headers:{
            'Content-Type': 'application/json',                
            'Access-Control-Allow-Origin': 'https://swapi.dev/api',
            'Access-Control-Allow-Methods' : 'GET,HEAD,OPTIONS',
            
        }
        });
            setDados(''+data.title);
            console.log(dados);
            
        }catch(er){
            console.log(er);
        }
    }
    async function testagem(){

    }
    return(<div>        
        <h1 >Starwars</h1>
        <h2>{dados}</h2>
        <button onClick={acessarFilmes}>aa</button>
        <a href="/filmes/2">aad</a>
    </div>)
}

export default GridList;