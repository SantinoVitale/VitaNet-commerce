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
const ItemListContainer = () => { // * Funcion contructora

    // * retorno que se va a renderizar
    return(
        <div>
            <p>Este es el itemListContainer</p>
            <ItemList/>
        </div>
        
        
    )
}


/*############################################ 
                Exportación
##############################################*/

export default ItemListContainer