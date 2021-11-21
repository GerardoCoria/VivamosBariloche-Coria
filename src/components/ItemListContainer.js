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
                console.log(productos)
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
        <div id="intro2">
        <p>Los mejores chocolates y delicias de la región</p>
        </div>
        <div id="intro3">
        <ul>       
            <li><span className="material-icons">price_check</span>
                Comprá a mejor precio</li>
            <li><span className="material-icons">favorite_border</span>
                Regalá a un ser querido</li>
            <li><span className="material-icons">icecream</span>
                Disfrutá de la variedad</li>
            <li><span className="material-icons">payments</span>
                Pagá en cuotas</li>
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