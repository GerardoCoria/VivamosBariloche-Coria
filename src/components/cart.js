import { useContext } from "react"
import { contexto } from "./CartContext"
import CartVacio from "./cartVacio"
import BtnCart from "./btnCart"
import CartRender from "./cartRender"
import { useHistory } from "react-router-dom"

const Cart = () => {
    const {push} = useHistory()
    const {vaciarCarrito, carrito} = useContext(contexto)
    const sumarTotal = () => {
        return carrito.reduce((total,producto)=>total+producto.precio*producto.contador,0)
    }
    const finalizarCompra = () => {push("/checkout")}

    if(carrito.length>0){
        return (
            <div id="cartPage">
                <h1 id="tituloCarrito">Carrito de compras</h1>
                <p id="subTituloCarrito">Aqui estan los productos que has seleccionado</p>
                <CartRender/>
                    <div id="divTotal">
                        <p>Valor total de la compra:</p>
                            <span id="sumaTotal">$ {sumarTotal()}</span>
                    </div>
                <BtnCart
                finalizarCompra={finalizarCompra}
                vaciarCarrito={vaciarCarrito}
                />
            </div>        
        )}
        else{
            return <CartVacio/>
        }           
 }
export default Cart