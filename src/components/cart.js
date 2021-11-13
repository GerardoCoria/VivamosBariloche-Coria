import { useContext } from "react"
import { contexto } from "./CartContext"
import CarritoVacio from "../media/carrito-vacio.jpg"
import{Link} from "react-router-dom"

const Cart = () => {

    const{eliminarDelCarrito, vaciarCarrito} = useContext(contexto)

    const {cart} = useContext(contexto)
    console.log(cart)
    console.log(cart.length)

    if(cart.length>0){

        return (
            <div>
                <h1 id="tituloCarrito">Carrito de compras</h1>
                <p id="subTituloCarrito">Aqui estan los productos que has seleccionado</p>
                {cart.map(productos=>(
                    <div key={productos.id} id="divCarrito">
                        <div>
                        <h3>Producto: {productos.nombre}</h3>
                        <p>Precio/unidad: $ {productos.precio}</p>
                        <p>Cantidad: {productos.contador}</p>
                        <p>Precio/total: $ {productos.precio*productos.contador}</p>
                        </div>
                        <img src={productos.img}alt="" width="100px" height="100px"/>
                        <button onClick={()=>eliminarDelCarrito(productos.id)} id="btnEliminar">
                            <span class="material-icons">close</span>
                        </button>
                    </div>
                )
                )
                }

                <div id="divTotal">
                    <p>Valor total de la compra:</p>
                        <span id="sumaTotal">$ 
                        {cart.reduce((total,producto)=>total+producto.precio*producto.contador,0)}
                        </span>
                </div>
                

                <button onClick={vaciarCarrito} id="btnVaciar">
                    <span class="material-icons">delete</span>
                    Vaciar carrito
                </button>
            </div>
        )}

        else{
            return(
                <div>
                    <p id="cartVacio">El carrito esta vacío</p>
                    <img src={CarritoVacio} alt="" id="imgVacio"/>
                    <button id="btnIrInicio">
                        <Link to="/" id="txtIrInicio">
                        <span class="material-icons">play_arrow</span>
                        Ir a comprar!
                        </Link>
                    </button>
                </div>
            )
        }           
 }
export default Cart