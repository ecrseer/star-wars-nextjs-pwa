import swapi from '../../../api';
import { useEffect, useState } from 'react';

const GridList = ({data}) =>{

    const [dados,setDados] = useState('...');
    useEffect(()=>{
        
    })

    

    async function acessarFilmes(event){
        event.preventDefault();
        console.log("DD "+process.env.NODE_ENV);
            console.log("SWW "+process.env.MY_SWAPI);
        try{
        const {data} = await swapi.get('/films/2',{
            headers:{
            'Content-Type': 'application/json',                
            'Access-Control-Allow-Origin': 'https://swapi.dev/api',
            'Access-Control-Allow-Methods' : 'GET,HEAD,OPTIONS',
            'Access-Control-Allow-Headers' : 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
        }
        });
        
            setDados(''+data.title);
            console.log(dados);
            
        }catch(er){
            console.log(er);
        }
    } 
    return(<div>        
        <h1 >Starwars Netlify</h1>
        <h2>{dados}</h2>
        <form onSubmit={acessarFilmes}>
        <button >aa</button>
        </form>
        
        
    </div>)
}

export default GridList;