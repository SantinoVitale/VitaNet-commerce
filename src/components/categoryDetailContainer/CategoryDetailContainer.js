/*############################################ 
                Importaciones
##############################################*/
// Modulos
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Estilos
import './CategoryDetailContainer.css';
// Componentes
import ItemDetail from '../itemDetailContainer/ItemDetailContainer';
import CategoryDetail from '../categoryDetail/CategoryDetail';
// Core

/*############################################ 
                Lógica
##############################################*/
const CategoryDetailContainer = (props) => { // * Funcion contructora

    const [productos, setProductos] = useState()
    const {nombreCategoria} = useParams()
    

    useEffect(() => {
        fetch('../data.json')
            .then(res=>res.json())
            .then(json => filtrar(json))
    }, [nombreCategoria])

    const filtrar = (data) => {

        const resultado = data.filter(data => data.categoria === nombreCategoria)
        setProductos(resultado.map(res => <CategoryDetail data={res} key={res.id} id={"producto" + res.id}/>))
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

export default CategoryDetailContainer