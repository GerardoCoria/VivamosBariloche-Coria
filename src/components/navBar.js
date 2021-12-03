import Logo from "../media/bariloche.png"
import CartWidget from "./CartWidget"
import {Link, NavLink} from "react-router-dom"

const NavBar = () =>{
    return(
        <header id="encabezado">
            <Link to="/">
                <img src= {Logo} alt="bariloche" id="logo"/>
                <h1 id="titulo">Vivamos Bariloche!</h1>
                <span id="titulo2">Delicias patagónicas</span>
            </Link>
            <CartWidget/>
            <nav>
                <NavLink to="/seccion/1">Chocolates</NavLink>
                <NavLink to="/seccion/2">Alfajores</NavLink>
                <NavLink to="/seccion/3">Helados</NavLink>
                <NavLink to="/seccion/4">Bombones</NavLink>
                <NavLink to="/seccion/5">Regalos</NavLink>
                <NavLink to="/seccion/6">Kids</NavLink>
            </nav>
        </header>
    )
}
export default NavBar