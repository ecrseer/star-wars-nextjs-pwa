import axios from 'axios';
import { useEffect, useState } from 'react';
import { Grow, makeStyles, } from '@material-ui/core';

import CardPersonagens from './CardPersonagens';


const useStyles = makeStyles((theme) => ({
    root: {     
        display:'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 0.2fr))',
        gridGap: '10px',
        justifyContent: 'center'
    },
}));


const PeopleList = (props) =>{
    

    const [dados,setDados] = useState([]);    
    
    const [isCarregando,setIsCarregando] = useState(false);

  

/* funcao asincrona que itera pelo array passado como prop
`personagensfilme` no `index.js` contendo todos os personagens
dentro do filme */
async function acessaPersonagens(arrLinks){    
    let arr = arrLinks;
    setDados([]);    
    
    if(arr.length>1){  
    for (var i = 0; i < arr.length; i++) { 
        try{            
            /* desestruturacao de inumeras variaveis
            dentro do objeto de requisicao, so irei utilizar
             `data` no momento */            
            const {data} = await axios.get(arr[i]);
            /* o array que já estava dentro do state`dados`
            sera devolvido atraves do maravilhoso spread operator
            e depois será acrescentado o personagem que está dentro de
            `data` nesse momento */
            setDados(dados => [...dados, data]); 
            
        }catch(erro){
          console.log(erro);
      }}
      setIsCarregando(false);
    }
   }

   /* sempre que for passado um novo array na props`personagensFilme`
   useEffect sera acionado e acionara o metodo acima */
   useEffect(()=>{  
    
    acessaPersonagens(props.personagensfilme);     
},
[props.personagensfilme])


            
            


return(
    /* triste tentativa de animar o carregamento dos personagens
    com material ui Grow */
 <Grow in={!isCarregando} {...props}> 
  <div >
  {/* o array de personagens e passado como props
  pros cards */}
     <CardPersonagens SwapiDados={dados}/>
   </div>
 </Grow>
 )}
export default PeopleList;
