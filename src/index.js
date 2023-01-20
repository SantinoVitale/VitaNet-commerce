/*############################################ 
                Importaciones
##############################################*/
// * Modulos
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// * Estilos
import './index.css';

// * Componentes
//import App from './App';
import CartProvider from './components/context/CartContext';

import NavBar from './components/navbar/NavBar.js'
import Footer from './components/footer/Footer.js'
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import AboutUs from './components/aboutUs/AboutUs';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import CategoryDetailContainer from './components/categoryDetailContainer/CategoryDetailContainer';
import Cart from './components/cart/Cart';
import Home from './components/home/Home';
// * Core
import reportWebVitals from './reportWebVitals';



/*############################################ 
                Lógica
##############################################*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/*' element={<Home/>}></Route>
            <Route exact path='/AboutUs' element={<AboutUs/>}></Route>
            <Route exact path='/productos' element={<ItemListContainer/>}></Route>
            <Route exact path='/producto/:productoId' element={<ItemDetailContainer/>}></Route>
            <Route exact path='/categoria/:nombreCategoria' element={<CategoryDetailContainer categoria=""/>}></Route>
            <Route exact path='/carrito' element={<Cart/>}></Route>
          </Routes>
        <Footer/>
      </BrowserRouter>
      </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*############################################ 
                Exportaciones
##############################################*/
