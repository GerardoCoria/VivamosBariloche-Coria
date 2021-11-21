import { useContext } from "react"
import { contexto } from "./CartContext"
import CarritoVacio from "../media/carrito-vacio.jpg"
import{Link} from "react-router-dom"
import Form from "./form"
import firebase from "firebase/app"
import {firestore} from "./firebase"
import {useState} from "react"

const Cart = () => {

    const [id, setId]= useState("")

    const [render, setRender] = useState(false)

    const{eliminarDelCarrito, vaciarCarrito} = useContext(contexto)

    const {cart} = useContext(contexto)

    const sumarTotal = () => {
       return cart.reduce((total,producto)=>total+producto.precio*producto.contador,0)
    }

    const finalizarCompra = () => {
        setRender(true)
    }

    const enviarOrden=(usuario)=>{
        // const usuario={
        //     nombre:"Juan",
        //     email:"lalal@ho.com",
        //     telefono:"123456789"
        // }
        
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
                console.log(resultado.id)
                console.log(orden.buyer.nombre)
                setId(resultado.id)
                eliminarDelCarrito()
                vaciarCarrito()
            })
            .catch(()=>{
                console.log("Error")
            })
    }

    if (render){
        return(
            <Form
            enviarOrden={enviarOrden}
            id={id}
            />
        )
    }   

    // else if(id){
    //     return(
    //         <>
    //         <p>Su compra se ha realizado con exito</p>
    //         <p>Su numero de orden es: #{id}</p>
    //         <p>Gracias por su compra!</p>
    //         </>
    //     )
    // }

  
    else if(cart.length>0 && !render){
        return (
            <div>
                <h1 id="tituloCarrito">Carrito de compras</h1>
                <p id="subTituloCarrito">Aqui estan los productos que has seleccionado</p>
                {cart.map(productos=>(
                    <div key={productos.id} id="divCarrito">
                        <div>
                        <h3>Producto: {productos.nombre}</h3>
                        <p>Precio/unidad: $ {productos.precio}</p>
                        <p>Cantidad: {productos.contador}</p>
                        <p>Precio/total: $ {productos.precio*productos.contador}</p>
                        <button>
                            <Link to={`/item/${productos.id}`} id="btnMas">
                                <span class="material-icons">add</span>
                                Agregar más
                            </Link>
                        </button>
                        </div>
                        <img src={productos.img}alt="" width="150px" height="150px"/>
                        <button onClick={()=>eliminarDelCarrito(productos.id)} id="btnEliminar">
                            <span class="material-icons">close</span>
                        </button>
                    </div>
                )
                )
                }

                <div id="divTotal">
                    <p>Valor total de la compra:</p>
                        <span id="sumaTotal">$ 
                        {sumarTotal()}
                        </span>
                </div>

                <div id="btnCart">
                    <button onClick={finalizarCompra} id="btnIrAForm">
                        <span class="material-icons">paid</span>
                        Ir a pagar
                    </button>

                    <button onClick={vaciarCarrito} id="btnVaciar">
                        <span class="material-icons">delete</span>
                        Vaciar carrito
                    </button>
                  </div> 
            </div>
            
        )}

      

        else{
            return(
                <div>
                    <p id="cartVacio">El carrito esta vacío</p>
                    <img src={CarritoVacio} alt="" id="imgVacio"/>
                    <button id="btnIrInicio">
                        <Link to="/" id="txtIrInicio">
                        <span class="material-icons">shop</span>
                        Ir a comprar!
                        </Link>
                    </button>
                </div>
            )
        }           
 }
export default Cart