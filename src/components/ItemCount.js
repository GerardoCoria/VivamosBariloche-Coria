import { useState } from "react"
const Contador = (props) =>{
    // Función para sumar y restar
    const [contarDias, setContarDias] = useState(props.minimoDias)
    const sumar = () =>{
        if(contarDias<30){
            setContarDias(contarDias+1)
        }
        else{
            return false
        }
    }
    const restar = () =>{
        if(contarDias>1){
            setContarDias(contarDias-1)
        }
        else{
            return false
        }
    }
    const confirmar = () =>{
        console.log(`Los días elegidos son: ${contarDias}`)
    }
    // Retorno del componente
    return(
        <div id="botonera">
            <h3>Para empezar, contanos cúantos días vas a quedarte en nuestra bella ciudad:</h3>
            <p>(nota: puede elegir un mínimo de 1(un) día/noche y un máximo de 30 (treinta) días)</p>
            <div id="contador">
                <button onClick={restar} className="material-icons">remove</button>
                <span>{contarDias}</span>
                <button onClick={sumar} className="material-icons">add</button>
            </div>
            <button onClick={confirmar} id="btnConfirmar">Confirmar</button>
        </div>
    )
}
export default Contador