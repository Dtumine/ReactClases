import { useState } from "react";





function ListaDeTareas() { 
   
    const[tareas, setTareas] = useState([]);
    const[nuevaTarea, setNuevaTarea] = useState('');

    function agregarTarea() {
        
    }

    return( 

        <div>
        <h1>Lista de tareas</h1>
        <input name="myInput" type="text" />
        <button onClick={agregarTarea}>Agregar</button> 
        
        </div>

    );
}


export default ListaDeTareas;
