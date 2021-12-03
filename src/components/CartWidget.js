import CarritoPng from "../media/carrito.png"
import { useContext } from "react"
import {contexto} from "./CartContext"
import { Link } from "react-router-dom"

const CartWidget = () =>{
    const {carrito} = useContext(contexto)
    const totalUnidades = carrito.reduce((total,producto)=>total+producto.contador,0)
    const countCart = totalUnidades>0 ? <imput id="contadorCarrito">{totalUnidades}</imput>: null
    return(
        <div id="contenedorCarrito"> 
            <Link to="/cart">
                <img src= {CarritoPng} alt="carrito" id="iconoCarrito"/>
                {countCart}
            </Link>
        </div>
    )
}
export default CartWidget