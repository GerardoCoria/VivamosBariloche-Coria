import { useContext } from "react"
import { contexto } from "./CartContext"

const Cart = () => {

    const{eliminarDelCarrito, vaciarCarrito} = useContext(contexto)

    const {cart} = useContext(contexto)
    console.log(cart)
    console.log(cart.length)

    if(cart.length>0){

        return (
            <div>
                <h1>Carrito</h1>
                {cart.map(productos=>(
                    <div key={productos.id}>
                        <h3>Producto: {productos.nombre}</h3>
                        <p>Precio: {productos.precio}</p>
                        <p>Cantidad: {productos.contador}</p>
                        <p>id: {productos.id}</p>
                        <button onClick={()=>eliminarDelCarrito(productos.id)}>
                            Eliminar del carrito
                        </button>
                    </div>
                )
                )
                }
                <button onClick={vaciarCarrito}>
                    Vaciar carrito
                </button>
            </div>
        )}

        else{
            return(
                <p>El carrito esta vacío</p>
            )
        }
 }
export default Cart