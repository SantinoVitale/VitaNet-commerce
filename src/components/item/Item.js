/*############################################ 
                Importaciones
##############################################*/
// Modulos
// Estilos

import './Item.css';

// Componentes
import ItemCounter from '../itemCounter/ItemCounter';
// Core

/*############################################ 
                Lógica
##############################################*/
const Item = (props) => { // * Funcion contructora

    const {nombre, descripcion, categoria, precio, stock} = props.data

    // * retorno que se va a renderizar
    return(
        <div>
            <h5>{nombre}</h5>
            <p>{descripcion}</p>
            <p>{categoria}</p>
            <p>{precio}</p>
            <ItemCounter stock={stock}/>
        </div>
    )
}


/*############################################ 
                Exportación
##############################################*/

export default Item