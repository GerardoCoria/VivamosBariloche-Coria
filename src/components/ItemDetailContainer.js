import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail'
import Loading from "../media/loading.gif"
import { useParams } from "react-router"

const ItemDetailContainer =()=>{
   // Productos
   const items =[
    {id:1, nombre:"Aerolineas", precio:"$40.000", img: "/aereo.jpg", seccion:1},
    {id:2, nombre:"Hotel",precio:"$10.000", img: "/hotel.jpg", seccion: 2},
    {id:3, nombre:"Excursión", precio:"$8.000", img: "/excursion.jpg", seccion: 3}, 
    {id:4, nombre:"Bares", precio:"$2.000", img: "/bares.jpg", seccion: 4},
    {id:5, nombre:"Bus", precio:"$10.000", img:"/aereo.jpg" , seccion:1},
    {id:6, nombre:"Flybondi", precio:"$20.000", img: "/aereo.jpg", seccion:1},
]


   const {id} =useParams()
    console.log(id)
//   const itemFiltrados = items.filter(item => item.id === id)
//    console.log(itemFiltrados)

    let itemFiltrados

    if (id){
    itemFiltrados = items.find(item => item.id == id)
    }
    else{
        itemFiltrados = items
    }
    console.log(itemFiltrados)

     //Hooks
     const [productos, setProductos] = useState([])
     useEffect(() => {
         setTimeout(() =>{
             setProductos(itemFiltrados)
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
    // function mostrarItem (items) {
    //     if (productos.length>0){
    //         return(
    //                 <div id ="aereo">
    //                     <div>{items[id-1].nombre}</div>
    //                     <div>{items[id-1].precio}</div>
    //                     <div>{<img src={items[id-1].img} alt="imagen"/>}</div>
    //                 </div>       
    //         )
    //     }
    // }

    return(<div id="itemDetallado">
        {loading(Loading)}
        <ItemDetail 
         productos={productos}
        // mostrarItem={mostrarItem(items)}
          />
    </div>)    
}
export default ItemDetailContainer


