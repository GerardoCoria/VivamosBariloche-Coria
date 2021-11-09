import { useContext } from "react"
import { contexto } from "./CartContext"

const Cart = () => {

    const{eliminarDelCarrito, vaciarCarrito} = useContext(contexto)

    const {cart} = useContext(contexto)
    console.log(cart)

        return (
            <div>
                <h1>Carrito</h1>
                
                <button onClick={eliminarDelCarrito}>
                    Eliminar del carrito
                </button>
                <button onClick={vaciarCarrito}>
                    Vaciar carrito
                </button>
            </div>
          
        )
}
export default Cart