/*############################################ 
                Importaciones
##############################################*/
// Modulos
// Estilos
import './ItemListContainer.css';

// Componentes
import ItemList from '../itemList/ItemList';
// Core

/*############################################ 
                Lógica
##############################################*/
const ItemListContainer = (props) => { // * Funcion contructora

    // * retorno que se va a renderizar
    return(
        <div className='itemListContainer'>
            <p>{props.greeting}</p>
            <ItemList/>
        </div>
        
        
    )
}


/*############################################ 
                Exportación
##############################################*/

export default ItemListContainer