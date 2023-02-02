/*############################################ 
                Importaciones
##############################################*/
// Modulos
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {collection, getDocs, query, where} from 'firebase/firestore'
// Estilos
import './CategoryDetailContainer.css';
// Componentes
import CategoryDetail from '../categoryDetail/CategoryDetail';
import { db } from '../../services/firebase';

// Core

/*############################################ 
                Lógica
##############################################*/
const CategoryDetailContainer = () => { // * Funcion contructora

    const [productos, setProductos] = useState()
    const {nombreCategoria} = useParams()
    
    useEffect(() => {
        const getData = async()=>{
            const queryRef = nombreCategoria ? query(collection(db,"listaProductos") , where("categoria","==",nombreCategoria)) : console.log('error')
            const response = await getDocs(queryRef)
            const docsInfo = response.docs.map(doc => {  
                const newDoc= {
                    id:doc.id,
                    ...doc.data()
                }
                return newDoc
        })
        setProductos(docsInfo.map(productos => <CategoryDetail data={productos}/>))
        }
        getData()
    }, [nombreCategoria])
    

    /*const filtrar = (data) => {

        const resultado = data.filter(data => data.categoria === nombreCategoria)
        setProductos(resultado.map(res => <CategoryDetail data={res} key={res.id} id={"producto" + res.id}/>))
    }*/

    // * retorno que se va a renderizar
    return(
        <div className='categoryListCont'>
            <h3>Nuestro {nombreCategoria}</h3>
            <div className='categoryList'>
            {productos}
            </div>
            
        </div>
    )
}



/*############################################ 
                Exportación
##############################################*/

export default CategoryDetailContainer