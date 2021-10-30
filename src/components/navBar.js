import Logo from "../media/bariloche.png"
import IconoCarrito from "./CartWidget"
import {NavLink} from "react-router-dom"

const BarraMenu = () => 
    <header id="encabezado">
        <img src= {Logo} alt="bariloche" id="logo"/>
        <h1 className="titulo">Tienda Virtual "Vivamos Bariloche!"</h1>
        <IconoCarrito/>
        <nav>
            <NavLink to="./1">Alojamiento</NavLink>
            <NavLink to="./2">Dónde comer</NavLink>
            <NavLink to="./3">Excursiones</NavLink>
            <NavLink to="./4">Transportes y traslados</NavLink>
        </nav>
    </header>
export default BarraMenu


