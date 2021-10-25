import { useState } from "react"
const Contador = (props) =>{

    // Función para sumar y restar
    const [contarDias, setContarDias] = useState(props.minimoDias)
    const sumar = () =>{
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
            <h3>Para empezar, contanos cúantos días vas a quedarte en nuestra bella ciudad:</h3>
            <p>(nota: puede elegir un mínimo de 1(un) día/noche y un máximo de 15 (quince) días)</p>
            <div id="contador">
                <button onClick={restar} className="material-icons">remove</button>
                <input value={contarDias} readOnly/>
                <button onClick={sumar} className="material-icons">add</button>
            </div>
            <button type="submit" onClick={() => props.confirmar(contarDias)} id="btnConfirmar">Confirmar</button>
        </div>
    )
}
export default Contador