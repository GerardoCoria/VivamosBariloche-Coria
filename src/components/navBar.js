import Logo from "../media/bariloche.png"
import IconoCarrito from "./CartWidget"
import {NavLink} from "react-router-dom"

const BarraMenu = () => 
    <header id="encabezado">
        <NavLink to="/">
        <img src= {Logo} alt="bariloche" id="logo"/>
        <h1 id="titulo">Tienda Virtual "Vivamos Bariloche!"</h1>
        </NavLink>
        <IconoCarrito/>
        <nav>
            <NavLink to="/seccion/1">Transportes y traslados</NavLink>
            <NavLink to="/seccion/2">Alojamientos</NavLink>
            <NavLink to="/seccion/3">Excursiones</NavLink>
            <NavLink to="/seccion/4">Gastronomía local</NavLink>
        </nav>
    </header>
export default BarraMenu


