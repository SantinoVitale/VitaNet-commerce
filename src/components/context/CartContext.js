/*############################################ 
                Importaciones
##############################################*/
// ! useContext (usar el contexto creado), createContext (Crear el contexto de la aplicacion) => React

import { useContext, createContext, useState } from "react";

//! 1° Crear el contexto - Valor dentro del argumento de la funcion es el valor por default del contexto
//! 2° Exportar el contexto creado
export const CartContext = createContext([]);
//! 3° Crear nuestra funcion para poder dar el contexto
//! 4° Podemos definirlo como un hook personalizado
//! 5° Exportar la funcion que almacena el hook useContext
export const useCartContext = () => { return (useContext(CartContext))}

//! 6° Crear el componente del contexto proveedor

const CartProvider = ({children}) => {

    const [items, setItems] = useState([])

    const addItem = (data) => {
        if(validateItem(data.item)){
            alert("El producto ya esta en el carrito")
            
        } else {
            const listaActual = items
            listaActual.push(data)
            setItems(listaActual)
            console.log(items);
        }
        
    }

    const deleteItem = (id) => {
        const NuevaLista = items.filter(e => e.id !== id)
        setItems(NuevaLista)
    }

    const clearCart = () => {
        setItems([])
    }

    const validateItem = (id) => {
        if(items.find(e => e.id === id)){
            return true
        } else {
            return false
        }
    }

    return(
        <CartContext.Provider value={{addItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;