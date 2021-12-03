import { useState } from "react"
import {contexto} from "./CartContext"
import { useContext } from "react"

const ItemCount = (props) =>{
    const {minimoStock, maximoStock} = useContext(contexto)
    const [contador, setContador] = useState(minimoStock)
    const sumar = () =>{
        if(contador<(maximoStock)){
            setContador(contador+1)
        }
        else{
            return false
        }
    }
    const restar = () =>{
        if(contador>(minimoStock)){
            setContador(contador-1)
        }
        else{
            return false
        }
    }
    const agregar=()=>{
        props.onAdd(contador)
    }
    return(
        <div id="botonera">
            <div id="contador">
                <button onClick={restar} className="material-icons">remove</button>
                <input value={contador} readOnly/>
                <button onClick={sumar} className="material-icons">add</button>
            </div>
            <button onClick={agregar} id="btnAgregar">
                <span className="material-icons">add_shopping_cart</span>
                Agregar al carrito
            </button>
        </div>
    )
}
export default ItemCount