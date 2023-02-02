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
        console.log(docsInfo);
        setProductos(docsInfo.map(productos => <ItemDetail key={productos.id} data={productos}/>))
        }
        getData()
    }, [productoId])


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