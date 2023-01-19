/*############################################ 
                Importaciones
##############################################*/
// Modulos

import Card from 'react-bootstrap/Card';
// Estilos
import './ItemDetail.css';
// Componentes
import ItemCounter from '../itemCounter/ItemCounter';
import { useEffect, useState } from 'react';
// Core

/*############################################ 
                Lógica
##############################################*/
const ItemDetail = (props) => { // * Funcion contructora

    const [cantidad, setCantidad] = useState(0);

    const {nombre, imagen, descripcion, precio, stock} = props.data

    const tomarCantidad = (numero) => {
        setCantidad(numero)
    }
    
    const onAdd = () => {
        console.log(`La cantidad de productos son ${cantidad} y el precio total es ${cantidad * precio}`);
    }

    // * retorno que se va a renderizar
    return(
        <div className='productoContenedor'>
            <img className="imagenProducto" src={"../" + imagen}/>
            <div className='producto'>
                <h1>
                    {nombre}
                </h1>
                <p>
                    {descripcion}
                </p>
                <h3>Precio: ${precio}</h3>
                <ItemCounter stock={stock} cantidades={tomarCantidad}/>
                <button className='button' onClick={onAdd}>On Add</button>
            </div>
        </div>
    )
}


/*############################################ 
                Exportación
##############################################*/

export default ItemDetail