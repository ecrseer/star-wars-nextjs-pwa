import {swapi} from '../../../api';
import axios from 'axios';
import { useEffect, useState } from 'react';

const MovieList = ({data}) =>{

    const [dados,setDados] = useState('...');
    useEffect(()=>{
        
    })

    

    async function acessarFilmes(event){
        event.preventDefault();
        
        try{
        const {data} = await swapi.get('/films/3');        
            setDados(''+data.title);
            console.log(data);            
        }catch(er){
            console.log(er);
        }
    } 

    async function acessarLista(eve){
        eve.preventDefault();
        try {
            axios.all([
                swapi.get('/films/3')
            ]).then(axios.spread((filmes)=>{
                console.log(filmes.data);
                setDados({                    
                    titulo:filmes.data.title
                });
    
            }))

        } catch (error) {
            console.log(er);
        }
    }
    async function acessarTeste(eve){
        eve.preventDefault();
        try {
            const {results} = await swapi.get('/films?page=1'); 
            setDados(datas);
            console.log('data eh '+datas);
        } catch (error) {
            console.log(er);
        }
    }
    
    return(<div>        
        <h1>Starwars Netlify</h1>        
            <h2>{dados.titulo}</h2>
            <form onSubmit={acessarLista}>
            <button >aa</button>        
        </form>
        <img src="#"></img>
        <h6>titulo:{dados.titulo}</h6>
        
        
    </div>)
}

export default MovieList;