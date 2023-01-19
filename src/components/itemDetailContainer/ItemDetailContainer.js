/*############################################ 
                Importaciones
##############################################*/
// Modulos
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Estilos
import './ItemDetailContainer.css';
// Componentes
import ItemDetail from '../itemDetail/ItemDetail';



// Core

/*############################################ 
                Lógica
##############################################*/
const ItemDetailContainer = (props) => { // * Funcion contructora
    
    const [productos, setProductos] = useState()
    const {productoId} = useParams()
    

    useEffect(() => {
        fetch('../data.json')
            .then(res=>res.json())
            .then(json => filtrar(json))
    }, [productoId])

    const filtrar = (data) => {

        const resultado = data.filter(data => data.id === +(productoId))
        setProductos(resultado.map(resultado => <ItemDetail data={resultado} key={resultado.id} id={"producto" + resultado.id}/>))
    }

    // * retorno que se va a renderizar
    return(
        <div>
            {productos}
        </div>
    )
}


/*############################################ 
                Exportación
##############################################*/

export default ItemDetailContainer