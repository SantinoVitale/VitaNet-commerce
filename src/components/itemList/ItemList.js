/*############################################ 
                Importaciones
##############################################*/
// Modulos
import { useEffect, useState } from 'react';
import {collection, getDocs} from 'firebase/firestore'
// Estilos
import './ItemList.css';

// Componentes
import Item from '../item/Item.js';
import { db } from '../../services/firebase';

// Core

/*############################################ 
                Lógica
##############################################*/
const ItemList = () => { // * Funcion contructora

    const [productos, setProductos] = useState()

    useEffect(() => {
        const getData = async()=>{
            const queryRef = collection(db, "listaProductos");
            const response = await getDocs(queryRef)
            const docsInfo = response.docs.map(doc => {  
                const newDoc= {
                    id:doc.id,
                    ...doc.data()
                }
                return newDoc
        })
        console.log(queryRef);
        setProductos(docsInfo.map(productos => <Item key={productos.id} data={productos}/>))
        }
        getData()
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