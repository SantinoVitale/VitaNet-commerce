/*############################################ 
                Importaciones
##############################################*/
// Modulos
import { Link } from 'react-router-dom';
// Estilos
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Componentes
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';
// Core

/*############################################ 
                Lógica
##############################################*/
const NavBar = () => { // * Funcion contructora


    // * retorno que se va a renderizar
    return(
        <header className='header'>
            <h1>VitaNet</h1>
            <div className='navbar'>
                <ul>
                    <li className='dolar'>Cotización dólar: $187.75</li>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/productos"}>Productos</Link></li>
                    <li>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown className='listaCategoria' title="Componentes PC" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to={`/categoria/Procesadores`}>Procesadores</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={"/categoria/Motherboard"}>Motherboard</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={"/categoria/MemoriasRAM"}>Memorias RAM</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={"/categoria/DiscosSolidos"}>Discos sólidos</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={"/categoria/DiscosDuros"}>Discos duros</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={"/categoria/FuenteAltaGamma"}>Fuente de alimentación de alta Gamma</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={"/categoria/FuenteGenericas"}>Fuente de alimentación genericas</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={"/categoria/PlacaVideo"}>Tarjetas gráficas</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className='listaCategoria' title="Periféricos" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to={"/categoria/Teclados"}>Teclados</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={"/categoria/Mouses"}>Mouses</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={"/categoria/Auriculares"}>Auriculares</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown.Item className='listaCategoria'><Link to={"/categoria/Monitores"}>Monitores</Link></NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    <li><Link to={"/AboutUs"}>Nosotros</Link></li>
                    <li><Link to={"/carrito"}><CartWidget/></Link></li>
                </ul>
            </div>
        </header>
        
    )
}


/*############################################ 
                Exportación
##############################################*/

export default NavBar