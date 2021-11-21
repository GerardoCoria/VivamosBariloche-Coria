import {useState} from "react"

const Form = (props) => {

    const [usuario, setUsuario] = useState({
      nombre: "",
      email: "",
      telefono: "",
    });

    const formChange = (e) => {
        setUsuario(e.target.value)
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.telefono]: e.target.value,
        })

    }

    const confirmarDatos = (e) => {
        e.preventDefault();
        console.log(usuario);
        props.enviarOrden(usuario);
    }


    if(props.id){
            return(
                <>
                <p>Su compra se ha realizado con exito</p>
                <p>Su numero de orden es: #{props.id}</p>
                <p>Gracias por su compra!</p>
                </>
            )
        }
    
        else{
        return(
        <>
            <h1>Formulario de compra</h1>
            <form onSubmit={confirmarDatos}>
                <input onChange={formChange} type="text" placeholder="Nombre" name="nombre" required/>
                <input onChange={formChange} type="email" placeholder="Email" name="email" required/>
                <input onChange={formChange} type="number" placeholder="Teléfono" name="telefono" required/>
            <button type="submit">Enviar</button>
            </form>
        </>
    )}
}

export default Form