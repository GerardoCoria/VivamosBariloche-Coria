import { useState, useEffect } from "react"
import ItemDetallado from './ItemDetail'
import Loading from "../media/loading.gif"
import fotoHotel from "../media/hotel.jpg"
import fotoAereo from "../media/aereo.jpg"
import fotoExcursion from "../media/excursion.jpg"
import bares from "../media/bares.jpg"
import { useParams } from "react-router"

const ContenedorItem =()=>{
   // Productos
   const items =[
    {id:1, nombre:"Aerolineas", precio:"$40.000", img: fotoAereo, seccion:1},
    {id:2, nombre:"Hotel",precio:"$10.000", img: fotoHotel, seccion: 2},
    {id:3, nombre:"Excursión", precio:"$8.000", img: fotoExcursion, seccion: 3}, 
    {id:4, nombre:"Bares", precio:"$2.000", img: bares, seccion: 4},
    {id:5, nombre:"Bus", precio:"$10.000", img:fotoAereo , seccion:1},
    {id:6, nombre:"Flybondi", precio:"$20.000", img: fotoAereo, seccion:1},
]

   const {id} =useParams()
   console.log(id)
  const itemFiltrados = items.filter(item => item.id === id)
   console.log(itemFiltrados)

    //Hooks
    const [productos, setProductos] = useState([])
    useEffect(() => {
        setTimeout(() => {
        setProductos(items);
        },2000);
    }, [id]);

    function loading (Loading) {
        if(productos.length===0){
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


