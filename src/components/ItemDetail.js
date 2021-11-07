import ItemCount from './ItemCount.js'

import { useContext } from "react"
import {contexto} from "./CartContext"

const ItemDetail =({productos})=>{

    const resultado = useContext(contexto)
    console.log(resultado)

    // const verProducto=(data)=>{
    //     console.log(`son: ${data}`)
    // }
    
    const onAdd=(contador)=>{
        console.log(contador, productos)
    }
    return(
        <div>
            {/* {props.mostrarItem} */}
            <div id ="detalle">
                <div>{productos.nombre}</div>
                <div>{productos.precio}</div>
                <div>{<img src={productos.img} alt="imagen"/>}</div>
            </div>  
            <ItemCount
            // confirmar={verProducto}
            onAdd={onAdd}
            minimoStock={1} maximoStock={15}
            />
        </div>
    )
}
export default ItemDetail