/*############################################ 
                Importaciones
##############################################*/
// Modulos
import { useCartContext } from '../context/CartContext';
import CartItem from '../cartItem/CartItem';
import { Link } from 'react-router-dom';
// Estilos
import './Cart.css';
import { useEffect, useState } from 'react';
// Componentes
// Core

/*############################################ 
                Lógica
##############################################*/
const Cart = () => { // * Funcion contructora

    const {items} = useCartContext()
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        setCartItems(items.map(e => <CartItem key={e.id} data={e} />))
    },[items])

    // * retorno que se va a renderizar
    return(
        
        <div className='CartContainer'>
            {cartItems.length === 0  ? ( <h1>No hay productos en el carrito! <Link to={"/productos"}>Productos</Link> </h1> ) 
            : (
                <>
                    <h1>Productos del carrito</h1>
                    <div className='gridContainer'>
                        {cartItems}
                    </div>
                    
                </>
                
            )
            }
            
        </div>
    )
}


/*############################################ 
                Exportación
##############################################*/

export default Cart