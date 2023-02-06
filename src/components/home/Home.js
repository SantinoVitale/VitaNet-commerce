/*############################################ 
                Importaciones
##############################################*/
// Modulos
import { useEffect, useState } from 'react';
import {collection, getDocs, limit, query} from 'firebase/firestore'
// Estilos
import './Home.css';
// Componentes
import CarouselHome from '../carousel/Carousel';
import Item from '../item/Item.js';
import { db } from '../../services/firebase';
// Core

/*############################################ 
                Lógica
##############################################*/
const Home = () => { // * Funcion contructora

    const [productos, setProductos] = useState()

    useEffect(() => {
        const getData = async()=>{
            const queryRef = query(collection(db, "listaProductos"), limit(4));
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
        <div className='homeContainer'>
            <CarouselHome/>
            <h1>Productos Principales</h1>
            <div className='productContainer'>
                
                {productos}
            </div>
            <div className='brandContainer'>
                <h1>Nuestras marcas</h1>
            </div>
        </div>
        
    )
}


/*############################################ 
                Exportación
##############################################*/

export default Home