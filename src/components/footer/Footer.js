/*############################################ 
                Importaciones
##############################################*/
// Modulos
// Estilos
import './Footer.css';
// Componentes
// Core

/*############################################ 
                Lógica
##############################################*/
const Footer = () => { // * Funcion contructora

    // * retorno que se va a renderizar
    return(

        <footer>

        <div className="container__footer">
            <div className="box__footer">
                <h2>Ubicación</h2>
                <iframe title='a' name="Ubicacion" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.337840233779!2d-68.840522733333!3d-32.88923489046908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0919a088bf37%3A0x6c50487ad60966a!2sJuleriaque%20-%20Mendoza%20Centro!5e0!3m2!1ses-419!2sar!4v1654984944545!5m2!1ses-419!2sar" width="300" height="150" allowFullScreen="" loading="lazy" referrerPolicy='no-referrer-when-downgrade'></iframe>
            </div>

            <div className="box__footer">
                <h2>Compañía</h2>
                <a href="https://github.com/SantinoVitale">Acerca de</a>
                <a href="https://github.com/SantinoVitale">Trabajos</a>
                <a href='$'>Servicios</a>
            </div>

            <div className="box__footer">
                <h2>Redes Sociales</h2>
                <a href='$'> Facebook</a>
                <a href='$'>Twitter</a>
                <a href='$'> Linkedin</a>
                <a href='$'> Instagram</a>
            </div>

        </div>

        <div className="box__copyright">
            <hr></hr>
            <p>Todos los derechos reservados © 2022 <b>PipoCorp.</b></p>
        </div>
        </footer>

    )
}


/*############################################ 
                Exportación
##############################################*/

export default Footer