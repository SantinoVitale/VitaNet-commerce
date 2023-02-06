/*############################################ 
                Importaciones
##############################################*/
// Modulos
import { useCartContext } from '../context/CartContext';
// Estilos
import './CartWidget.css';
// Componentes
// Core

/*############################################ 
                Lógica
##############################################*/
const CartWidget = (props) => { // * Funcion contructora
    const {items} = useCartContext()

    // * retorno que se va a renderizar
    return(
        <>
            {items.length === 0 ? ( <></> ) : ( <i className="bi bi-cart">{props.cantidad}</i> )}
        </>
        
    )
}


/*############################################ 
                Exportación
##############################################*/

export default CartWidget