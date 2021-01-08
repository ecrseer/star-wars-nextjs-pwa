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
    
    acessaPersonagens(props.personagensfilme);     
},
[props.personagensfilme])


            
            


return(
 <Grow in={!isCarregando} {...props}> 
  <div >
     <CardPersonagens SwapiDados={dados}/>
   </div>
 </Grow>
 )}
export default PeopleList;
