import { useState, useEffect } from "react"
import ItemDetallado from './ItemDetail'
import Loading from "../media/loading.gif"
import fotoHotel from "../media/hotel.jpg"
import fotoAereo from "../media/aereo.jpg"
import fotoExcursion from "../media/excursion.jpg"
import bares from "../media/bares.jpg"

const ContenedorItem =()=>{
   // Productos
   const items =[
    {id:1, nombre:"Hotel",precio:"$10.000", img: fotoHotel},
    {id:2, nombre:"Aéreo", precio:"$40.000", img: fotoAereo},
    {id:3, nombre:"Excursión", precio:"$8.000", img: fotoExcursion},
    {id:4, nombre:"Bares", precio:"$2.000", img: bares},
   ]
    //Hooks
    const [productos, setProductos] = useState([])
    useEffect(() => {
        setTimeout(() => {
        setProductos(items);
        },2000);
    }, []);

    function loading (Loading) {
        if(productos.length==0){
            return(
                <div className="loading">
                    <img src={Loading} alt="loading"/>
                    <p id="cargando">{"Cargando productos..."}</p>
                </div> )
                }
                else{
                    return(
                    false
                    )
                }
            }

    function mostrarItem1 (productos){
        if (productos.length>0){
            return(
                    <div id ="aereo">
                        <div>{items[1].nombre}</div>
                        <div>{items[1].precio}</div>
                        <div>{<img src={items[1].img} alt="imagen"/>}</div>
                        <button>Comprar</button>
                    </div>       
            )
        }
    }

    return(<div id="itemDetallado">
        {loading(Loading)}
        <ItemDetallado 
        return={mostrarItem1(productos)}
          />
    </div>)    
}

export default ContenedorItem


