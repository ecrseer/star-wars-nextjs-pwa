import swapi from '../../../api';
import { useEffect, useState } from 'react';

const GridList=()=>{

const [dados,setDados] = useState('...');
    useEffect(()=>{
        
    })

    

    async function acessarFilmes(){
        try{
        const {data} = await swapi.get('/films/2',{headers:{
            "Access-Control-Allow-Origin": "https://swapi.dev/",
            
        }
        });
            setDados(''+data.title);
            console.log(dados);
            console.log("DD "+process.env.NODE_ENV);
        }catch(er){
            console.log(er);
        }
    }
    return(<div>        
        <h1 >Starwars</h1>
        <h2>{dados}</h2>
        <button onClick={acessarFilmes}>aa</button>
    </div>)
}

export default GridList;