/*############################################ 
                Importaciones
##############################################*/
// Modulos
// Estilos
import CartWidget from '../cartWidget/CartWidget';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Componentes
// Core

/*############################################ 
                Lógica
##############################################*/
const NavBar = () => { // * Funcion contructora
    // * retorno que se va a renderizar
    return(
        <header className='header'>
            <h1>VitaNet</h1>
            <navbar className='navbar'>
                <ul>
                    <li><a href='./index.html'>Home</a></li>
                    <li>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">PC Escritorio</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">PC Gamer</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">All in one</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Notebook Intel</NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    <li>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Componentes PC</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Periféricos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Monitores</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">PC Armadas</NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    <li><a href='./index.html'>Nosotros</a></li>
                    <CartWidget/>
                </ul>
            </navbar>
        </header>
        
    )
}


/*############################################ 
                Exportación
##############################################*/

export default NavBar