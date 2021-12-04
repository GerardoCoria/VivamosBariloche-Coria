import {useState} from "react"
import FormMsj from "./formMsj"
import Loading from "../media/loading.gif"
import { useContext } from "react"
import {contexto} from "./CartContext"
import { Link } from "react-router-dom"
import firebase from "firebase/app"
import {firestore} from "./firebase"
import CartVacio from "./cartVacio"

const Form = () => {
    const {cart, eliminarDelCarrito, vaciarCarrito, carrito} = useContext(contexto)
    const [loading, setLoading] = useState(false)
    const [id, setId]= useState("")
    const [cartMsj, setCartMsj]= useState([])
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
    const sumarTotal = () => {
        return carrito.reduce((total,producto)=>total+producto.precio*producto.contador,0)
        }
    const enviarOrden=()=>{
        setLoading(true)
        const orden={
            buyer: usuario,
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: sumarTotal()
        }
        const db = firestore
        const collection = db.collection("ordenes")
        const query = collection.add(orden)
        query
            .then((resultado)=>{
                setId(resultado.id)
                setCartMsj(cart)
                eliminarDelCarrito()
                vaciarCarrito()
            })
            .catch(()=>{
                console.log("Error")
            })
    }
    if(id){
        return (
            <FormMsj 
                id={id}
                usuario={usuario}
                cartMsj={cartMsj}
            />
        )
    }
    else if(!id && loading===true){
        return (
            <div className="loading">
                <h1 id="cargando3">Procesando su compra</h1>
                <img src={Loading} alt="loading"/>
            </div>
        )
    }
    else if (cart.length===0){
        return<CartVacio/>
    }
    else{
        return(
            <div id="formPage">
                <h1 id="tituloForm">Formulario de compra</h1>
                <div id="formListado">
                    <p>Ud. va a adquirir:</p>
                    {cart.map((producto, i) => {
                        return(
                            <div key={i}>
                                <span>({producto.contador})</span> unidad/es de <span>{producto.nombre}</span><br/>
                            </div>
                        )
                    })}
                    <p>Por un total de: <strong>${cart.reduce((total,producto)=>total+producto.precio*producto.contador,0)}</strong></p>
                    <button>
                        <Link to="/cart">
                            Modificar cantidad y/o productos
                        </Link>
                    </button>
                </div>
                <form onSubmit={enviarOrden} id="formulario">
                    <input onChange={formChange} type="text" placeholder="Nombre" name="nombre" required/>
                    <input onChange={formChange} type="email" placeholder="Email" name="email" required/>
                    <input onChange={formChange} type="number" placeholder="Teléfono" name="telefono" required/>
                    <button type="submit">
                        <span className="material-icons">shopping_cart_checkout</span>
                        Enviar
                    </button>
                </form>
        </div>
    )}
}
export default Form