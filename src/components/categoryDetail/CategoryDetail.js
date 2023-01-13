/*############################################ 
                Importaciones
##############################################*/
// Modulos
import Card from 'react-bootstrap/Card';
// Estilos
import './CategoryDetail.css';
// Componentes
import ItemCounter from '../itemCounter/ItemCounter';
// Core

/*############################################ 
                Lógica
##############################################*/
const CategoryDetail = (props) => { // * Funcion contructora

    const {nombre, imagen, descripcion, precio, stock} = props.data

    // * retorno que se va a renderizar
    return(
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={"../"+ imagen} />
                <Card.Body>
                    <Card.Title>{nombre} || ${precio}</Card.Title>
                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                    <ItemCounter stock={stock}/>
                </Card.Body>
        </Card>
    )
}


/*############################################ 
                Exportación
##############################################*/

export default CategoryDetail