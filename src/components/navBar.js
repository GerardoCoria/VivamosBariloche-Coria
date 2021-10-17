import Logo from "../media/bariloche.png"
import IconoCarrito from "./CartWidget"
const BarraMenu = () => 
    <header id="encabezado">
        <img src= {Logo} alt="bariloche" id="logo"/>
        <h1 className="titulo">Tienda Virtual "Vivamos Bariloche!"</h1>
        <IconoCarrito/>
        <nav>
            <a href="#">Alojamiento</a>
            <a href="#">Dónde comer</a>
            <a href="#">Excursiones</a>
            <a href="#">Transportes y traslados</a>
        </nav>
    </header>
export default BarraMenu


