import { useState } from "react"
import { Link } from "react-router-dom"

const ItemCount = (props) =>{

    // Función para sumar y restar
    const [contarDias, setContarDias] = useState(props.minimoDias)
    const sumar = (e) =>{
        if(contarDias<(props.maximoDias)){
            setContarDias(contarDias+1)
        }
        else{
            return false
        }
    }
    const restar = () =>{
        if(contarDias>(props.minimoDias)){
            setContarDias(contarDias-1)
        }
        else{
            return false
        }
    }

    // Retorno del componente
    return(
        <div id="botonera">
            <div id="contador">
                <button onClick={restar} className="material-icons">remove</button>
                <input value={contarDias} readOnly/>
                <button onClick={sumar} className="material-icons">add</button>
            </div>
            <button type="submit" onClick={()=>props.confirmar(contarDias)} id="btnConfirmar">
                <Link to="/cart">
                Confirmar
                </Link>
            </button>
        </div>
    )
}
export default ItemCount