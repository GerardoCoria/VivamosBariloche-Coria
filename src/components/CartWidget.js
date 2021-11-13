import CarritoPng from "../media/carrito.png"
import { useContext } from "react"
import {contexto} from "./CartContext"

const CartWidget = () =>{

    const {cart} = useContext(contexto)
    const totalUnidades = cart.reduce((total,producto)=>total+producto.contador,0)

    if (totalUnidades === 0) return null
    else{

    return(
        <div id="contenedorCarrito"> 
            <img src= {CarritoPng} alt="carrito" id="iconoCarrito"/>
            <imput id="contadorCarrito">
                {totalUnidades}
            </imput>
        </div>
    )}
}
export default CartWidget
