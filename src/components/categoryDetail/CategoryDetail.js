/*############################################ 
                Importaciones
##############################################*/
// Modulos
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
// Estilos
import './CategoryDetail.css';
// Componentes

// Core

/*############################################ 
                Lógica
##############################################*/
const CategoryDetail = (props) => { // * Funcion contructora

    const {nombre, imagen, descripcion, precio, id} = props.data

    // * retorno que se va a renderizar
    return(
        <Card style={{ width: '18rem', margin: '50px'}}>
            <Card.Img variant="top" src={"../"+ imagen} />
                <Card.Body>
                    <Card.Title>{nombre} || ${precio}</Card.Title>
                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                    <Link to={`/producto/${id}`}>Ver producto</Link>
                </Card.Body>
        </Card>
    )
}


/*############################################ 
                Exportación
##############################################*/

export default CategoryDetail