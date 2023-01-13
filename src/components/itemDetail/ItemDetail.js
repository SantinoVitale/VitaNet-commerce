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
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={"../"+ lista[0].imagen} />
                <Card.Body>
                    <Card.Title>{lista[0].nombre} || ${lista[0].precio}</Card.Title>
                    <Card.Text>
                        {lista[0].descripcion}
                    </Card.Text>
                    <ItemCounter stock={lista[0].stock}/>
                </Card.Body>
        </Card>
    )
}


/*############################################ 
                Exportación
##############################################*/

export default ItemDetail