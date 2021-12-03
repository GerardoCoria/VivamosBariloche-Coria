import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail'
import Loading from "../media/loading.gif"
import { useParams } from "react-router"
import {firestore} from "./firebase"
import Error from "./error"

const ItemDetailContainer =()=>{
    const {id} =useParams()
    const [productos, setProductos] = useState([])
    const [error, setError] = useState(false)
    let data={}

    useEffect(() => {
        const db = firestore
        const collection = db.collection("productos")
        const query = collection.doc(id)
        const promesa = query.get()
        promesa
            .then((documento)=>{
                if(documento.exists){
                    data = {...documento.data(),id:documento.id}
                    setProductos(data)
                    setError(false)
                }
                else{
                    setError(true)
                }
            })
            .catch(()=>{
                    console.log("No se encontró el producto")   
            })
     }, [id])
     
    if(productos.length===0 && error===false){
        return(
            <div className="loading">
                <img src={Loading} alt="loading"/>
                <p id="cargando2">{"Cargando productos..."}</p>
            </div>
        )
    }
    else if(data && error === false){
        return(
            <div id="itemDetallado">
                <ItemDetail productos={productos}/>
            </div>
        )
    }
    else{
        return <Error/>
    }          
}
export default ItemDetailContainer