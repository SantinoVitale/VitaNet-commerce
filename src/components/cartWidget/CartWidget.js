/*############################################ 
                Importaciones
##############################################*/
// Modulos
import { useState, useEffect } from 'react';
// Estilos
import './CartWidget.css';
// Componentes
import { useCartContext } from '../context/CartContext';
// Core

/*############################################ 
                Lógica
##############################################*/
const CartWidget = () => { // * Funcion contructora

    const {CartLength} = useCartContext

    // * retorno que se va a renderizar
    return(
        <i className="bi bi-cart">{CartLength}</i>
    )
}


/*############################################ 
                Exportación
##############################################*/

export default CartWidget