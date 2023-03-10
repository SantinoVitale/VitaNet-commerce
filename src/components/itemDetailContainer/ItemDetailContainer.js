/*############################################ 
                Importaciones
##############################################*/
// Modulos
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {collection, getDocs, query, where} from 'firebase/firestore'


// Estilos
import './ItemDetailContainer.css';
// Componentes
import ItemDetail from '../itemDetail/ItemDetail';
import {db} from "../../services/firebase"
import SpinnerRendering from '../spinner/Spinner';




// Core

/*############################################ 
                Lógica
##############################################*/
const ItemDetailContainer = (props) => { // * Funcion contructora
    
    const [productos, setProductos] = useState()
    const {productoId} = useParams()
    

    useEffect(() => {
        const getData = async()=>{
            const queryRef = productoId ? query(collection(db,"listaProductos") , where("__name__","==",productoId)) : console.log('PRODUCTO FANTASMA')
            const response = await getDocs(queryRef)
            const docsInfo = response.docs.map(doc => {  
                const newDoc= {
                    id:doc.id,
                    ...doc.data()
                }
                return newDoc
        })
        setProductos(docsInfo.map(productos => <ItemDetail key={productos.id} data={productos}/>))
        }
        getData()
    }, [productoId])


    // * retorno que se va a renderizar
    return(
        <>
            {productos === undefined ? ( 
                    <SpinnerRendering/>
                    
                
            ) : <div>{productos}</div>}
        </>
    )
}


/*############################################ 
                Exportación
##############################################*/

export default ItemDetailContainer