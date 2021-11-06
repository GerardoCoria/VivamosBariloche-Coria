import Logo from "../media/bariloche.png"
import CartWidget from "./CartWidget"
import {Link, NavLink} from "react-router-dom"

const NavBar = () => 
    <header id="encabezado">
        <Link to="/">
        <img src= {Logo} alt="bariloche" id="logo"/>
        <h1 id="titulo">Tienda Virtual "Vivamos Bariloche!"</h1>
        </Link>
        <CartWidget/>
        <nav>
            <NavLink to="/seccion/1">Transportes y traslados</NavLink>
            <NavLink to="/seccion/2">Alojamientos</NavLink>
            <NavLink to="/seccion/3">Excursiones</NavLink>
            <NavLink to="/seccion/4">Gastronomía local</NavLink>
        </nav>
    </header>
export default NavBar


