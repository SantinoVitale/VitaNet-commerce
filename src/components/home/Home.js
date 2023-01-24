/*############################################ 
                Importaciones
##############################################*/
// Modulos
// Estilos
import './Home.css';
// Componentes
import CarouselHome from '../carousel/Carousel';
// Core

/*############################################ 
                Lógica
##############################################*/
const Home = () => { // * Funcion contructora

    // * retorno que se va a renderizar
    return(
        <div className='homeContainer'>
            <CarouselHome/>
            <div className='productContainer'>
                <h1>Productos Principales</h1>
                
            </div>
            <div className='brandContainer'>
                <h1>Nuestras marcas</h1>
            </div>
        </div>
        
    )
}


/*############################################ 
                Exportación
##############################################*/

export default Home