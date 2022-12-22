/*############################################ 
                Importaciones
##############################################*/
// Modulos
// Estilos
import './ItemListContainer.css';
// Componentes
// Core

/*############################################ 
                Lógica
##############################################*/
const ItemListContainer = (props) => { // * Funcion contructora

    // * retorno que se va a renderizar
    return(
        <p>Este es un itemListContainer y se dice: "{props.greeting}"</p>
    )
}


/*############################################ 
                Exportación
##############################################*/

export default ItemListContainer