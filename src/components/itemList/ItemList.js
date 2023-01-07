/*############################################ 
                Importaciones
##############################################*/
// Modulos
// Estilos
import './ItemList.css';

// Componentes
import Item from '../item/Item.js';
// Core

/*############################################ 
                Lógica
##############################################*/
const ItemList = () => { // * Funcion contructora

    const listaDeProductos = [
        {
            id: 1,
            nombre: "RTX 2060 8GB gddr5",
            descripcion: "Gráfica NVIDIA",
            categoria: "Tarjetas gráficas",
            precio: 120000,
            stock: 5
        },
        {
            id: 2,
            nombre:"AMD Ryzen 5 2400",
            descripcion:"Procesador AMD de segunda generacion",
            categoria: "Procesadores",
            precio: 40000,
            stock: 10
        },
        {
            id: 3,
            nombre:"RX 5500 XT 8GB gddr5",
            descripcion: "Gráfica de AMD",
            categoria: "Tarjetas graficas",
            precio: 60000,
            stock: 2
        },
        {
            id: 4,
            nombre:"Kingston 8GB RAM ddr4 3200mhz",
            descripcion: "Memoria RAM Kingston",
            categoria: "Memoría RAM",
            precio: 5000,
            stock: 8
        }
    ]

    const listaDeProductosRenderizado = listaDeProductos.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos}/>)

    // * retorno que se va a renderizar
    return(
        <div>
            <h3>Este es el itemList</h3> 
            {listaDeProductosRenderizado}
        </div>
        

    )
}


/*############################################ 
                Exportación
##############################################*/

export default ItemList