import ItemCount from './ItemCount.js'
import { useState, useEffect } from "react"
import { useContext } from "react"
import {contexto} from "./CartContext"
import { useHistory } from 'react-router-dom'

const ItemDetail =({productos})=>{

    const {push} = useHistory()

    const [renderizar,setRenderizar] = useState(false)


    const{agregarAlCarrito}=useContext(contexto)
    
    const onAdd=(contador)=>{
         agregarAlCarrito(contador, productos)
        setRenderizar(true)
        console.log(renderizar)
    }

    const seguirComprando=()=>{
        push('/')
    }

    const confirmar = () =>{
        push('/Cart')
    }

    if (renderizar){
        return(
            <div>
                 <div id ="detalle">
                    <div>{productos.nombre}</div>
                    <div>{productos.precio}</div>
                    <div>{<img src={productos.img} alt="imagen"/>}</div>
                </div>
                <div>
                    <button onClick={seguirComprando} id="btnSeguir">
                    <span class="material-icons">home</span>
                        Seguir comprando
                    </button>
                    <button onClick={confirmar} id="btnConfirmar">
                    <span class="material-icons">paid</span>
                        Finalizar compra
                    </button>
                </div> 
            </div>
        )
        }
        else{
        return(
            <div>
                <div id ="detalle">
                    <div>{productos.nombre}</div>
                    <div>{productos.precio}</div>
                    <div>{<img src={productos.img} alt="imagen"/>}</div>
                </div>
                <ItemCount 
                onAdd={onAdd}
                minimoStock={1} maximoStock={15}
                />        
            </div>
    )
}
}
export default ItemDetail