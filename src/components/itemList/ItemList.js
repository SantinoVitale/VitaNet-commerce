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
import SpinnerRendering from '../spinner/Spinner';

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
        setProductos(docsInfo.map(productos => <Item key={productos.id} data={productos}/>))
        }
        getData()
    }, [])

    // * retorno que se va a renderizar
    return(
        
        <div className='itemListCont'>
            <h3>Nuestros Productos</h3>
            {productos === undefined ? (<SpinnerRendering/>) : 
            <div className='itemList'>
            {productos}
            </div>
            }
        </div>
        

    )
}


/*############################################ 
                Exportación
##############################################*/

export default ItemList