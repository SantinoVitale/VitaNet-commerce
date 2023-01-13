/*############################################ 
                Importaciones
##############################################*/
// Modulos
// Estilos
import './CartWidget.css';
// Componentes
// Core

/*############################################ 
                Lógica
##############################################*/
const CartWidget = (props) => { // * Funcion contructora

    // * retorno que se va a renderizar
    return(
        <i className="bi bi-cart">{props.count}</i>
    )
}


/*############################################ 
                Exportación
##############################################*/

export default CartWidget