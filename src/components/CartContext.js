import { createContext, useState } from "react"

export const contexto = createContext()
const { Provider } = contexto

const ComponenteDelContexto =(props)=>{

    //array para el carrito, se lee en CartWidget.js y en Cart.js
    const [cart, setCart] = useState([])

    //funcion para agregar al carrito, se lee en ItemDetails.js
    const isInCart = (id)=>{
        return cart.find(productos=> productos.id === id)
    }

    const agregarAlCarrito = (contador, productos)=>{
        if (isInCart(productos.id)){
            setCart(cart.map(item=>(
            item.id === productos.id ? {...item, contador: item.contador + contador} : item)))
            console.log("ya estaba y sumé cantidad")
        }
        else{
             setCart([...cart, {
                id: productos.id,  
                contador: contador,
                nombre: productos.nombre,
                precio: productos.precio,
                img: productos.img
            }])
            console.log("no estaba y lo agregue")
        }
        }

    //para eliminar del carrito
    const eliminarDelCarrito = (id)=>{
        const cartAux=cart.filter(productos=> productos.id !== id)
        setCart(cartAux)
        console.log("eliminado del carrito!!")
        console.log(id)
    }
    //para resetear el carrito
    const vaciarCarrito = ()=>{
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