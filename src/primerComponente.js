//el primer paso para definir un compoonenten es el nombre
// el nombre siempre iniciaar con mayusculaa
// basicamnet el component es una funcion .. 
// todas als funciones trabajan -anonima -declarativa o las flecha
// no puede tener dos contenedores padres .. solo define uno
// useState 
import { useState } from 'react';

import './App.css';
const PrimerComponente = ()=>{
    //todo lo que este dentro del return sera renderizado
    // esta tambien es llamado hook 
const[count,setCount ] =useState(0)

//son dos funciones 
const sumar =()=> setCount(count + 1);
const restar =()=> setCount(count -1);

    return(
        <div>        
            <h1 className='titulo'>esta es mi componente{count} </h1>
            {/* vamos a acrear dos botones para sumar y para restar */}
            <button onClick={sumar}>SUMAR</button>
            <button onClick={restar}>Restar</button>
               
       </div>
    )
}


export default PrimerComponente;