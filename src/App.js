// import { useState } from 'react';
// import './styles.css';  
// import Contador from './Contador'; 
//import './contador.css' 
import ListaDeTareas from "./ListaDeTareas"; 
/*

function Cuadrado({value, clickEnCuadrado}) {  

  return <button className='cuadrado' onClick={clickEnCuadrado}>{value}</button> 
}
 

function Tablero({xEsLaProxima, cuadrados, onPlay}) { 
 

function handleClick(i) {  
    if (calcularGanador(cuadrados) || cuadrados[i])
      { return; }

    const siguientesCuadrados = cuadrados.slice(); 
    siguientesCuadrados[i] = "X";
    // cuadrados(siguientesCuadrados);  

    if (xEsLaProxima){ 
      siguientesCuadrados[i] ="X"
    } else {
      siguientesCuadrados[i] = "O"
    } 
    
    onPlay(siguientesCuadrados);
  }  


  const ganador = calcularGanador(cuadrados); 
  
  let estado; 
  if (ganador) {
    estado = ('GANÓ ' + ganador)
  } else { estado = 'Siguiente Jugador ' + (xEsLaProxima? 'X' : 'O')}
 
  return (  

        <div> 
         <div className='estado'>{estado}</div>
         <div className='borde-fila'>
         <Cuadrado value={cuadrados[0]} clickEnCuadrado={ () => handleClick(0)}/>
         <Cuadrado value={cuadrados[1]} clickEnCuadrado={ () => handleClick(1)}/>
         <Cuadrado value={cuadrados[2]} clickEnCuadrado={ () => handleClick(2)}/>
         </div>  

         <div className='borde-fila'>
         <Cuadrado value={cuadrados[3]} clickEnCuadrado={ () => handleClick(3)}/>
         <Cuadrado value={cuadrados[4]} clickEnCuadrado={ () => handleClick(4)}/>
         <Cuadrado value={cuadrados[5]} clickEnCuadrado={ () => handleClick(5)}/>
         </div> 

         <div className='borde-fila'>
         <Cuadrado value={cuadrados[6]} clickEnCuadrado={ () => handleClick(6)}/>
         <Cuadrado value={cuadrados[7]} clickEnCuadrado={ () => handleClick(7)}/>
         <Cuadrado value={cuadrados[8]} clickEnCuadrado={ () => handleClick(8)}/>
         </div> 
         </div>
     )
} 

export default function Juego() {  
     
  const [xEsLaProxima, setxESLaProxima] = useState(true); 
  const [historialCuadrados, setHistorialCuadrados] = useState([Array(9).fill(null)]); 
  const [movimientoActual, setMovimientoActual] = useState(0);
  const cuadradosActuales = historialCuadrados[movimientoActual]; 

  function manejadorJugada(siguientesCuadrados) { 

    const siguienteHistorial = [...historialCuadrados.slice(0, movimientoActual + 1), siguientesCuadrados];
    setHistorialCuadrados(siguienteHistorial);
    setMovimientoActual(siguienteHistorial.length - 1)
    setxESLaProxima(!xEsLaProxima);

  }

  function saltarA(siguienteMovimiento) {
    setMovimientoActual(siguienteMovimiento);
    setxESLaProxima(siguienteMovimiento % 2 === 0);
  }

  const movimientos = historialCuadrados.map((cuadrados, movimiento) => {
    let descripcion;
    if (movimiento > 0) {
      descripcion = 'Ir al movimiento #' + movimiento;
    } else {
      descripcion = 'Ir al inicio del juego';
    }
    return (
      <li key={movimiento}>
        <button onClick={() => saltarA(movimiento)}>{descripcion}</button>
      </li>
    );
  });

        return (
          <div className='juego'> 
          <div className='juego-tablero'>
          <Tablero xEsLaProxima={xEsLaProxima} cuadrados={cuadradosActuales} onPlay={manejadorJugada} /> 
          </div> 
          <div className='juego-info'>
          <ol>{movimientos}</ol>
          </div>
          </div>
        );


      
}



function calcularGanador(cuadrados) {
  const lineas = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lineas.length; i++) {
    const [a, b, c] = lineas[i];
    if (cuadrados[a] && cuadrados[a] === cuadrados[b] && cuadrados[a] === cuadrados[c]) {
      return cuadrados[a];
    }
  }
  return null;
}


*/ 


/*
export default function App(){

  return(
     <div>
      <h1>Contador</h1>
      <Contador/> 
     </div>
  );

} 
  */ 

export default function App() {

  return( <ListaDeTareas/> )
}



