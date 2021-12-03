import ItemCount from './ItemCount.js'
import { useState } from "react"
import { useContext } from "react"
import {contexto} from "./CartContext"
import { useHistory } from 'react-router-dom'
import ItemDetailRender from './ItemDetailRender.js'

const ItemDetail =({productos})=>{
    const {push} = useHistory()
    const [renderizar,setRenderizar] = useState(false)
    const {agregarAlCarrito} =useContext(contexto)
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
            <div id ="detalle">
                <ItemDetailRender productos={productos}/>
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
        )
    }
    else{
        return(
            <div id ="detalle">
                <ItemDetailRender productos={productos}/>
                <ItemCount onAdd={onAdd}/> 
            </div>          
        )
    }
}
export default ItemDetail