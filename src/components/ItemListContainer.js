import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { firestore } from "./firebase"

const ItemListContainer = (props) =>{
    
    const {id} =useParams()
    console.log(id)
  
    const [productos, setProductos] = useState([])
    useEffect(() => {

        // const items = firestore
        // const itemsProducts = items.collection("productos")
        // itemsProducts.get().then(querySnapshot => {
        //     if(querySnapshot.size === 0){
        //         console.log("No hay productos")
               
        //     }
        //     setProductos(querySnapshot.docs.map(doc =>({...doc.data(),id:doc.id})))
        // })
        // .catch((error) => {
        //     console.log(error)
        // })

        if(id){
            const items = firestore
            const itemsProducts = items.collection("productos")
            const itemSecciones = itemsProducts.where("seccion", "==", id)
            const consulta = itemSecciones.get()
            consulta
            .then(resultado => {
                if(resultado.size === 0){
                    console.log("No hay productos")
                }
                else{
                setProductos(resultado.docs.map(doc =>({...doc.data(),id:doc.id})))
                console.log("ok")
            }
            })
            
            .catch((error) => {
                console.log(error)
            })
        }
        else{
            const items = firestore
            const itemsProducts = items.collection("productos")
            itemsProducts.get().then(resultado => {
                if(resultado.size === 0){
                    console.log("No hay productos")
                }
                else{
                setProductos(resultado.docs.map(doc =>({...doc.data(),id:doc.id})))
                console.log("ok")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    
        }
    }, [id]);

    // let itemFiltrados
    
    // if (id){
    //    itemFiltrados = productos.filter(item => item.seccion == id)
    // }
    // else{
    //     itemFiltrados = productos
    // }
    // console.log(itemFiltrados)

    return(
        <>
        <div id="intro">
            <h1>Bienvenidos al portal de viajes de Bariloche</h1>        
        </div>
        <div id="intro2">
        <p>Te damos la bienvenida a la temporada <span>{props.estacion} {props.temporada}</span></p>
        </div>
        <div id="intro3">
        <ul>       
            <li><span className="material-icons">flight_takeoff</span>
                Comprá tus pasajes aéreos</li>
            <li><span className="material-icons">hotel</span>
                Reservá tu alojamiento</li>
            <li><span className="material-icons">add_a_photo</span>
                Conseguí las mejores excursiones</li>
            <li><span className="material-icons">restaurant</span>
                Probá las exquisiteces de la región</li>
        </ul>
        </div>
        <ItemList productos={productos} 
        loading= {function (Loading) {
        if(productos.length===0){
            return(
                <div className="loading">
                    <img src={Loading} alt="loading" />
                    <p id="cargando">{"Cargando productos..."}</p>
                </div> )
                }
                else{
                    return(
                    false
                    )
                }
            }}    
        />

    </>
    )
}
export default ItemListContainer