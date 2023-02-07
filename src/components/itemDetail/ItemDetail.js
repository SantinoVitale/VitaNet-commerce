/*############################################ 
                Importaciones
##############################################*/
// Modulos
import { useState } from 'react';

// Estilos
import './ItemDetail.css';
// Componentes
import ItemCounter from '../itemCounter/ItemCounter';

import {useCartContext} from '../context/CartContext';
// Core

/*############################################ 
                Lógica
##############################################*/
const ItemDetail = (props) => { // * Funcion contructora

    const [cantidad, setCantidad] = useState(0);

    const {id, nombre, imagen, descripcion, precio, stock} = props.data

    const {addItem} = useCartContext()

    const tomarCantidad = (numero) => {
        setCantidad(numero)
    }
    
    const onAdd = () => {
        if(cantidad !== 0){
            const producto = {
            id:  id,
            tittle: nombre,
            description: descripcion,
            imagen: imagen,
            price: precio,
            count: cantidad,
            total: precio * cantidad,
            }
            addItem(producto, cantidad)
        } else {
            alert("Agregue al menos un producto")
        }
        
    }

    // * retorno que se va a renderizar
    return(
        <div className='productoContenedor'>
            <img alt='Imagen producto' className="imagenProducto" src={"../" + imagen}/>
            <div className='producto'>
                <h1>
                    {nombre}
                </h1>
                <p>
                    {descripcion}
                </p>
                <h3>Precio: ${precio}</h3>
                <div className='addToCart'>
                    <ItemCounter initial={1} stock={stock} cantidades={tomarCantidad}/>
                <button className='buttonDetail' onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}


/*############################################ 
                Exportación
##############################################*/

export default ItemDetail