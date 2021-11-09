import { useState } from "react"


const ItemCount = (props) =>{


    // Función para sumar y restar
    const [contador, setContador] = useState(props.minimoStock)
    const sumar = (e) =>{
        if(contador<(props.maximoStock)){
            setContador(contador+1)
        }
        else{
            return false
        }
    }
    const restar = () =>{
        if(contador>(props.minimoStock)){
            setContador(contador-1)
        }
        else{
            return false
        }
    }

    const agregar=()=>{
        props.onAdd(contador)
    }

    // Retorno del componente
    return(
        <div id="botonera">
            <div id="contador">
                <button onClick={restar} className="material-icons">remove</button>
                <input value={contador} readOnly/>
                <button onClick={sumar} className="material-icons">add</button>
            </div>
                <button onClick={agregar}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount