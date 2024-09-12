// import React from 'react';
import { useState } from 'react';
import './contador.css';
function Contador() {

    const[contador, setContador] = useState(0);

    return(
        <div>
        <h1>{contador}</h1>
        <button onClick={() => setContador(contador + 1)}>SUMAR</button>
        <button onClick={() => setContador(contador - 1)}>RESTAR</button>
        <button onClick={() => setContador(0) }>RESETEAR</button>

        </div>
    )



} 

export default Contador;



// setContador(contador + 1)
// setContador(contador - 1)
// setContador(0)