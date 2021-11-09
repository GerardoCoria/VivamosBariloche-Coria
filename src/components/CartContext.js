import { createContext, useState } from "react"

export const contexto = createContext()
const { Provider } = contexto

const ComponenteDelContexto =(props)=>{

    //array para el carrito, se lee en CartWidget.js y en Cart.js
    const [cart, setCart] = useState([])

    //funcion para agregar al carrito, se lee en ItemDetails.js
    const agregarAlCarrito = (contador, productos)=>{
        console.log("agregado al carrito!!")
        //si el producto ya esta en el carrito, solo se le suma uno
        if(cart.find(item=>item.id===productos.id)){
            setCart(cart.map(item=>item.id===productos.id?{...item, contador:item.contador+1}:item))}

        else{ setCart([...cart, {contador: contador, productos: productos}])
        }
         } 

    //para eliminar del carrito
    const eliminarDelCarrito = (contador, productos)=>{
        console.log("eliminado del carrito!!")
    }
    //para resetear el carrito
    const vaciarCarrito = (contador, productos)=>{
        console.log("vaciando carrito!!")
        setCart([]) 
    }   


    const valorDelProvider={
        cart: cart, //para el lenght en cartWidget
        agregarAlCarrito: agregarAlCarrito, //para agregar al carrito en ItemDetails.js
        eliminarDelCarrito: eliminarDelCarrito,
        vaciarCarrito: vaciarCarrito
    }

    return(
    <Provider value={valorDelProvider}>
        {props.children}
    </Provider>
)}
export default ComponenteDelContexto