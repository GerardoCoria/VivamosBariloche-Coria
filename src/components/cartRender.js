import { useContext } from "react"
import { contexto } from "./CartContext"

const CartRender = () => {
    const {carrito, eliminarDelCarrito, agregarAlCarrito, minimoStock, maximoStock} = useContext(contexto)
    return (
    carrito.map(productos=>{
        return(
        <div key={productos.id} id="divCarrito">
            <div id="divCarrito2">
                <h3>{productos.nombre}</h3>
                <p>Precio/unidad: ${productos.precio}</p>
                <p>Cantidad: {productos.contador}</p>
                <p>Precio/total: <strong>${productos.precio*productos.contador}</strong></p>
            </div>
            <div id="botonesCart">
                <div>
                    <p>Puede modificar la cantidad</p>
                    <p>Hasta un máximo de 10 u.</p>
                </div>
                <button className="material-icons" id="btnCartMenos"
                    onClick={()=>{
                        if(productos.contador>minimoStock){
                            agregarAlCarrito(-1, productos)
                        }
                        else{
                            return false
                    }}}
                >remove</button>
                <button className="material-icons" id="btnCartMas"
                    onClick={()=>{
                        if(productos.contador<maximoStock){
                            agregarAlCarrito(1, productos)
                        }
                        else{
                            return false
                        }}}                 
                >add</button>
            </div>
            <img src={productos.img} alt="" width="150px" height="150px"/>
            <button onClick={()=>eliminarDelCarrito(productos.id)} id="btnEliminar">
                <span className="material-icons">close</span>
            </button>
        </div>
        )
        })
    )
}
export default CartRender