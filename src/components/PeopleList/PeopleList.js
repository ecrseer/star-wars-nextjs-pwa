import {swapi} from '../../../api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, GridList, Grow, makeStyles, Paper, Typography } from '@material-ui/core';
import {PersonagemImgApi} from '../../assets/personagensImageApi';
import PeopleCard from './PeopleCard';


const useStyles = makeStyles((theme) => ({
    root: {     
        display:'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 0.2fr))',
        gridGap: '10px',
        justifyContent: 'center'
    },
}));


const PeopleList = (props) =>{
    const classes = useStyles();

    const [dados,setDados] = useState([]);    
    const [personagensImgs,setPersonagensImgs] = useState([{}]);
    const [isCarregando,setIsCarregando] = useState(false);

    function getImgPersonagem(nomePersonaCard){
        let personagemMesmoNome = personagensImgs
            .filter(personag=>personag.name==nomePersonaCard);
         if(typeof personagemMesmoNome[0] === 'undefined')
            return('#')

         return(personagemMesmoNome[0].image);
         
     }
 async function getTodosImgApi(){
    
    try {
        const {data} = await PersonagemImgApi.get('/all.json');
        //console.log('imagemdo'+data[1].name)
        setPersonagensImgs(data);
        
        }catch (error) {
            console.log('0 images porque '+error)        
        } 
 }


async function acessaPersonagens(arrLinks){    
    let arr = arrLinks;
    setDados([]);    
    if(arr.length>1){
        

    for (var i = 0; i < arr.length; i++) { 
        try{            
            const {data} = await axios.get(arr[i]);
            setDados(dados => [...dados, data]); 
            
        }catch(erro){
          console.log(erro);
      }}
      setIsCarregando(false);
    }
   }

   useEffect(()=>{  
    getTodosImgApi();
    acessaPersonagens(props.personagensfilme);     
},
[props.personagensfilme])

const CardPersonagem = ()=>{   
      
        return(
        <div className={classes.root}>{
          dados.map((personagem,index)=>{     
            return(
                <Paper elevation={3}
            variant="elevation" 
            style={{paddingLeft:'12px'
            ,backgroundColor:'#111'}}               
               key={index}
               color="secondary">
                 <img src={getImgPersonagem(personagem.name)}
                 width="20%"/>
                 <Typography color="secondary">
                   <div>{personagem.name}</div>
                   
                   <div>altura: {personagem.height}</div>
                   <div>massa: {personagem.mass}</div>
                   <div>cor do cabelo: {personagem.hair_color}</div>
                   <div>cor da pele: {personagem.skin_color}</div>
                   <div>cor dos olhos: {personagem.eye_color}</div>
                   <div>data de nascimento: {personagem.birth_year}</div>
                   <div>genero: {personagem.gender}</div>
                   </Typography> 
               </Paper>

          )})


        }</div>)
            
            
        }
            
            


return(

 <Grow in={!isCarregando} {...props}> 
  <div >
     <CardPersonagem/>
   </div>
 </Grow>






)
}
export default PeopleList;
