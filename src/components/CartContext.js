import { createContext, useEffect, useState } from "react"
import GuardarStorage from "./localStorage"
export const contexto = createContext()
const { Provider } = contexto

const ComponenteDelContexto =(props)=>{
    const [cart, setCart] = useState([])
    const [carrito, setCarrito] = GuardarStorage("carrito", [])

    useEffect(()=>{
    setCart(carrito)
    },[carrito])
    
    const isInCart = (id)=>{
        return cart.find(productos=> productos.id === id)
    }
    const agregarAlCarrito = (contador, productos)=>{
        if (isInCart(productos.id)){
            setCart(carrito.map(item=>(
                item.id === productos.id ? {...item, contador: item.contador + contador} : item)))
            setCarrito(cart.map(item=>(
                item.id === productos.id ? {...item, contador: item.contador + contador} : item)))
        }
        else{
            setCart([...carrito, {
                id: productos.id,  
                contador: contador,
                nombre: productos.nombre,
                precio: productos.precio,
                img: productos.img
            }])
            setCarrito([...carrito, {...productos, contador}])            
        }}
    const eliminarDelCarrito = (id)=>{
        const cartAux=cart.filter(productos=> productos.id !== id)
        setCart(cartAux)
        setCarrito(carrito.filter(productos=> productos.id !== id))
    }
    const vaciarCarrito = ()=>{
        setCart([]) 
        setCarrito([])
    }   
    const minimoStock=1
    const maximoStock=10

    const valorDelProvider={
        cart: cart, 
        carrito: carrito,
        agregarAlCarrito: agregarAlCarrito, 
        eliminarDelCarrito: eliminarDelCarrito,
        vaciarCarrito: vaciarCarrito,
        minimoStock: minimoStock,
        maximoStock: maximoStock
    }
    return(
    <Provider value={valorDelProvider}>
        {props.children}
    </Provider>
)}
export default ComponenteDelContexto