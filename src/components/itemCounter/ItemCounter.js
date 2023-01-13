/*############################################ 
                Importaciones
##############################################*/
// Modulos

// Estilos

import './ItemCounter.css';
// Componentes

// Core
import { useState } from 'react';
/*############################################ 
                Lógica
##############################################*/
const ItemCounter = (props) => { // * Funcion contructora

    //props.stock = 15
    //No puede restar menos de 0
    //No puede sumar mas de la cantidad del stock

    //Agregar un manejo de estado
    //UseState
    const [count, setCount] = useState(0)

    //funciones de suma y resta
    const addOne = () => {
        if (count < props.stock){
            setCount(count + 1)
        }
        
    }
    const disOne = () => {
        if (count > 0){
            setCount(count - 1)
        }
        
    }
    //funcion de agregar
    const onAdd = () => {
        console.log(count)
    }
    
    // * retorno que se va a renderizar
    return(
        <div className='itemCount'>
            <button className='button' onClick={addOne}>+</button>
            <p>{count}</p>
            <button className='button' onClick={disOne}>-</button>
            <button className='button' onClick={onAdd}>On Add</button>
        </div>
    )
}


/*############################################ 
                Exportación
##############################################*/

export default ItemCounter
