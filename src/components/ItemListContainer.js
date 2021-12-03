import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { firestore } from "./firebase"
import Intro from "./intro"
import Error from "./error"

const ItemListContainer = () =>{
    const {id} =useParams() 
    const [productos, setProductos] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        const itemsProducts = firestore
        const filterQuery = id? itemsProducts.collection("productos").where("seccion", "==", id): itemsProducts.collection("productos")
        filterQuery.get().then(resultado => {
        if(resultado.size === 0){
            setError(true)              
        }
        else{
            setProductos(resultado.docs.map(doc =>({...doc.data(),id:doc.id})))
            setError(false)
        }
        })            
        .catch((error) => {
            console.log(error)
        })
    }, [id]);

    if(error === true){
        return <Error/>
    }  
    return(
        <>
            <Intro/>
            <ItemList productos={productos}
                id={id}   
                loading= {function (Loading) {
                    if(productos.length===0 && error === false){
                        return(
                            <div className="loading">
                                <img src={Loading} alt="loading" />
                                <p id="cargando">{"Cargando productos..."}</p>
                            </div>
                        )
                    }
                    else if(productos.length>0 && error === false){
                        return false
                    }
                }}
            />
        </>
    )
}
export default ItemListContainer