import logoFacebook from "../media/facebook.png"
import logoInstagram from "../media/instagram.png"
import logoWhastapp from "../media/wa.png"

const Footer = () => {
    const volverArriba = () => {
        window.scroll({top: 0, behavior: 'smooth'})
    }
    return (
        <footer>
            <div id="redes">
                <p>Contacto</p>
                <img src={logoFacebook} alt="facebook" />
                <img src={logoInstagram} alt="instagram" />
                <img src={logoWhastapp} alt="whatsapp" />
            </div>
            <div id="info">
                <p>Proyecto realizado para el curso "React JS", del instituto CoderHouse.</p>
                <p>Realizado por Gerardo Andrés Coria.</p>
            </div>
            <div id="btnArriba">
                <button onClick={volverArriba} id="volverArriba">
                    <span className="material-icons">keyboard_double_arrow_up</span>
                    Volver arriba
                </button>
            </div>  
        </footer>
    )
}
export default Footer