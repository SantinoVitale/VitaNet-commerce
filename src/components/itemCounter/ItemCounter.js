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

            props.cantidades(count)
        }
        
    }
    const disOne = () => {
        if (count > 0){
            setCount(count - 1)

            props.cantidades(count)
        }
        
    }
    
    // * retorno que se va a renderizar
    return(
        <div className='itemCount'>
            <span className='count'>{count}</span>
            <span className='btn-vertical'>
                <button className='button btn-count btn-b' onClick={addOne}>+</button>
                <button className='button btn-count' onClick={disOne}>-</button>
            </span>
        </div>
    )
}


/*############################################ 
                Exportación
##############################################*/

export default ItemCounter
