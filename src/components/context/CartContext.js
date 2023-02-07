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


    const addItem = (data, count) => {
        if(validateItem(data.id)){
            const productIndex = items.findIndex(element=>element.id===data.id);
            items[productIndex].count = items[productIndex].count + count
            items[productIndex].total = items[productIndex].price * items[productIndex].count
            setItems([...items])
        } else {
            
            setItems([...items, data])
        }
        
    }

    // ? Funcion que se va a usar en el cart.js

    const deleteItem = (id) => {
        setItems(items.filter(e => e.id !== id))
    }

    
    // ? Funcion que se va a usar para el cart.js 
    const clearCart = () => {
        setItems([])
    }

    const validateItem = (id) => {
        if(items.find(e => e.id === id)){
            console.log("true");
            return true
        } else {
            console.log("false");
            return false
        }
    }

    return(
        <CartContext.Provider value={{addItem, items, deleteItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;