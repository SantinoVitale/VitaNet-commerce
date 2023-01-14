/*############################################ 
                Importaciones
##############################################*/
// Modulos

import Card from 'react-bootstrap/Card';
// Estilos
import './ItemDetail.css';
// Componentes
import ItemCounter from '../itemCounter/ItemCounter';
// Core

/*############################################ 
                Lógica
##############################################*/
const ItemDetail = (props) => { // * Funcion contructora

    const lista = props.data
    // * retorno que se va a renderizar
    return(
        <div className='productoContenedor'>
            <img src={"../" + lista[0].imagen}/>
            <div className='producto'>
                <h1>
                    {lista[0].nombre}
                </h1>
                <p>
                    {lista[0].descripcion}
                </p>
                <h3>Precio: ${lista[0].precio}</h3>
                <ItemCounter stock={lista[0].stock}/>
            </div>
        </div>
    )
}


/*############################################ 
                Exportación
##############################################*/

export default ItemDetail