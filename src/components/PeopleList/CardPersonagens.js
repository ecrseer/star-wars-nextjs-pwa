import { makeStyles, Paper, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import {PersonagemImgApi} from '../../assets/personagensImageApi';

const useStyles = makeStyles((theme) => ({
    root: {     
        display:'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 0.2fr))',
        gridGap: '10px',
        justifyContent: 'center'
    },
}));



const CardPersonagens = ({SwapiDados})=>{  
        
    const classes = useStyles();

    /* estado que sera usado para armazenar as urls das imagens de cada personagem
     que nao encontrei na `swapi.dev` */
    const [personagensImgs,setPersonagensImgs] = useState([{}]);

    /* metodo que utiliza outra "api" para buscar a url da
    foto de cada personagem pelo axios e as armazena
    no state `personagensImgs` */
    async function getTodosImgApi(){

        try {
            const {data} = await PersonagemImgApi.get('/all.json');            
            setPersonagensImgs(data);
            
            }catch (error) {
                console.log('0 images porque '+error)        
            } 
        }

        /* funcao invocada dentro do componente de imagem do card
         do personagem que recebe o personagem
         que esta atualmente sendo iterado sobre */
        function getImgPersonagem(nomePersonaCard){
            /* de todos os personagens dentro do state `personagensImgs`
            que vem de outra "api" é filtrado aquele que tem o mesmo nome do 
            personagem que esta sendo iterado no momento */
            let personagemMesmoNome = personagensImgs
                .filter(personag=>personag.name==nomePersonaCard);

                /* se nao encontrou o personagem retorna 
                url de imagem   vazia */
             if(typeof personagemMesmoNome[0] === 'undefined')
                return('#')
        
             return(personagemMesmoNome[0].image);
             
         }


    /* sempre que for passado um novo array na props `SwapiDados`
   useEffect sera acionado e acionara o metodo acima,ou seja
   comportamento conforme seu componente pai `PeopleList.js` */
    useEffect(()=>{
        /* busca todas urls das imagens */
        getTodosImgApi();
    },
    [SwapiDados])


    
    return(
    <div className={classes.root}>{
        
      SwapiDados.map((personagem,index)=>{     
        return(
            <Paper elevation={4}
        variant="elevation" 
        style={{paddingLeft:'12px'
        ,backgroundColor:'#111'}}               
           key={index}
           color="secondary">
             <img src={getImgPersonagem(personagem.name)}
             width="32%"/>
             <Typography color="primary">
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

      )})}</div>)            
        
    }

export default CardPersonagens;
