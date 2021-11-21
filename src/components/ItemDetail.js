import ItemCount from './ItemCount.js'
import { useState } from "react"
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
                    <div id="tituloDetail">{productos.nombre}</div>
                    <div id="precioDetail">Precio: $ {productos.precio}</div>
                    <div id="imagenDetail">{<img src={productos.img} alt="imagen"/>}</div>
                    <div id="descripcionDetail">{productos.descripcion}</div>
                    <div id="botonesDobles">
                        <button onClick={seguirComprando} id="btnSeguir">
                        <span className="material-icons">home</span>
                            Seguir comprando
                        </button>
                        <button onClick={confirmar} id="btnConfirmar">
                        <span className="material-icons">paid</span>
                            Finalizar compra
                        </button>
                    </div> 
                </div>
            </div>
        )
        }
        else{
        return(
            <div>
                <div id ="detalle">
                    <div id="tituloDetail">{productos.nombre}</div>
                    <div id="precioDetail">Precio: $ {productos.precio}</div>
                    <div id="imagenDetail">{<img src={productos.img} alt="imagen"/>}</div>
                    <div id="descripcionDetail">{productos.descripcion}</div>
                
                    <ItemCount 
                onAdd={onAdd}
                minimoStock={1} maximoStock={15}
                /> 
                </div>
                      
            </div>
    )
}
}
export default ItemDetail