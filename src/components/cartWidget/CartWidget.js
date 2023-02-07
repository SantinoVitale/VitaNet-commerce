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
const CartWidget = () => { // * Funcion contructora
    const {items} = useCartContext()

    // * retorno que se va a renderizar
    return(
        <>
            {items.length === 0 ? ( <></> ) : ( <i className="bi bi-cart">{items.length}</i> )}
        </>
        
    )
}


/*############################################ 
                Exportación
##############################################*/

export default CartWidget