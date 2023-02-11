/*############################################ 
                Importaciones
##############################################*/
// Modulos
import { useCartContext } from '../context/CartContext';
import CartItem from '../cartItem/CartItem';
import { Link } from 'react-router-dom';
import {collection, addDoc} from 'firebase/firestore'
// Estilos
import './Cart.css';
import { useEffect, useRef, useState } from 'react';
// Componentes
import {db} from "../../services/firebase"
// Core

/*############################################ 
                Lógica
##############################################*/
const Cart = () => { // * Funcion contructora

    const {items, clearCart} = useCartContext()
    const [cartItems, setCartItems] = useState([])
    const [orderId, setOrderId] = useState(undefined)
    const [total, setTotal] = useState()

    useEffect(() => {
        setCartItems(items.map(e => <CartItem key={e.id} data={e} />))
    },[items])

    const name = useRef(null)
    const phone = useRef(null)
    const email = useRef(null)

    useEffect(() => {
        let suma = 0;
        items.forEach(element => {
            suma = suma + element.total
            
        });
        setTotal(suma.toFixed(2)) 
    },[items])

        
    

    const sendOrder= async(event) => {
        event.preventDefault()
        const name1 = name.current
        const phone2 = phone.current
        const email3 = email.current
        const newOrder = {
            buyer:{
                name:name1.value,
                phone:phone2.value,
                email:email3.value
            },
            items: items,
            total: total
        }
        console.log(newOrder);
        const queryRef = collection(db, "orders")
        const response = await addDoc(queryRef, newOrder)
        setOrderId(response.id)
    }

    const clear = () => {
        clearCart()
    }

    // * retorno que se va a renderizar
    return(
        
        <div className='CartContainer'>
            {cartItems.length === 0  ? ( <h1 className='h1Warn'>No hay productos en el carrito! <Link to={"/productos"}>Productos</Link> </h1> ) 
            : (
                <>
                    <h1>Productos del carrito</h1>
                    <div className='gridContainer'>
                        {cartItems}
                    </div>
                    <h1>Total de la compra: ${total}</h1>
                    {orderId === undefined ? 
                    (<>
                    <div className='formContainer'>
                        <form className='formOrder'>
                            <input type={'text'} placeholder={"Nombre"} ref={name}></input>
                            <input type={'number'} placeholder={"Numero"} ref={phone}></input>
                            <input type={'email'} placeholder={"Email"} ref={email}></input>
                            <button className='buttonClear' onClick={sendOrder}>Enviar pedido</button>
                        </form>
                    </div>
                        
                    
                    
                    </>) : (<h3>Su orden de pedido es {orderId}</h3>)}

                    <div className='buttonContainer'>
                        <button className='buttonClear' onClick={clear}>Vaciar Carrito</button>
                    </div>
                    
                    
                </>
                
            )
            }
            
        </div>
    )
}


/*############################################ 
                Exportación
##############################################*/

export default Cart