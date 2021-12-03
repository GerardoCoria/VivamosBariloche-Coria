import { Link } from "react-router-dom"
import CarritoVacio from "../media/carrito-vacio.jpg"

const CartVacio = () => {
    return (
        <div>
            <p id="cartVacio">El carrito esta vacío</p>
            <img src={CarritoVacio} alt="" id="imgVacio"/>
            <button id="btnIrInicio">
            <Link to="/" id="txtIrInicio">
                <span className="material-icons">shop</span>
                Ir a comprar!
                </Link>
            </button>
        </div>
    )
}
export default CartVacio