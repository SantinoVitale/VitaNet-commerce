/*############################################ 
                Importaciones
##############################################*/
// Modulos
import { useEffect, useState } from 'react';
// Estilos
import './ItemList.css';

// Componentes
import Item from '../item/Item.js';

// Core

/*############################################ 
                Lógica
##############################################*/
const ItemList = () => { // * Funcion contructora

    const [productos, setProductos] = useState()

    useEffect(() => {
        fetch('data.json')
            .then(res=>res.json())
            .then(json=> setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos}/>)))
    }, [])

    // * retorno que se va a renderizar
    return(
        
        <div className='itemListCont'>
            <h3>Nuestros Productos</h3>
            <div className='itemList'>
            {productos}
            </div>
            
        </div>
        

    )
}


/*############################################ 
                Exportación
##############################################*/

export default ItemList