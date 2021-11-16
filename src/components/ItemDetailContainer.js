import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail'
import Loading from "../media/loading.gif"
import { useParams } from "react-router"
import {firestore} from "./firebase"

const ItemDetailContainer =()=>{
   // Productos
//    const items =[
//     {id:1, nombre:"Aerolineas", precio: 40000, img: "/aereo.jpg", seccion:1},
//     {id:2, nombre:"Hotel",precio: 10000, img: "/hotel.jpg", seccion: 2},
//     {id:3, nombre:"Excursión", precio:8000, img: "/excursion.jpg", seccion: 3}, 
//     {id:4, nombre:"Bares", precio: 2000, img: "/bares.jpg", seccion: 4},
//     {id:5, nombre:"Bus", precio: 10.000, img:"/aereo.jpg" , seccion:1},
//     {id:6, nombre:"Flybondi", precio: 20.000, img: "/aereo.jpg", seccion:1},
// ]


    // let itemFiltrados
    // if (id){
    // itemFiltrados = items.find(item => item.id == id)
    // }
    // else{
    //     itemFiltrados = items
    // }
    // console.log(itemFiltrados)

    const {id} =useParams()
    console.log(id)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        //  setTimeout(() =>{
        //      setProductos(itemFiltrados)
        //  },2000);
        const db = firestore
        const collection = db.collection("productos")
        const query = collection.doc(id)
        const promesa = query.get()
        promesa
            .then((documento)=>{
                console.log("Consulta exitosa")
                const data = documento.data()
                setProductos(data)
            })
            .catch(()=>{
                console.log("Consulta fallida")
                return (<div>Error</div>)
            })
     }, [id]);

        if(productos.length===0){
            return(
                <div className="loading">
                    <img src={Loading} alt="loading"/>
                    <p id="cargando2">{"Cargando productos..."}</p>
                </div> )
                }
                else{
                    return(
          
                    <div id="itemDetallado">
                        <ItemDetail 
                        productos={productos}
                        />
                    </div>)
                }    
}
export default ItemDetailContainer


