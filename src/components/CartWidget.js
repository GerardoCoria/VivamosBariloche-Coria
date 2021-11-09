import CarritoPng from "../media/carrito.png"
import { useContext } from "react"
import {contexto} from "./CartContext"

const CartWidget = () =>{

    const {cart} = useContext(contexto)

    return(
<div id="contenedorCarrito">
    <img src= {CarritoPng} alt="carrito" id="iconoCarrito"/>
</div>
    )}
export default CartWidget
