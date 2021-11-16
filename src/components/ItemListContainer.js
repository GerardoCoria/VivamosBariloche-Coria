import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { firestore } from "./firebase"

const ItemListContainer = (props) =>{
    // Productos
    
    // const items =[
    //     {id:1, nombre:"Aerolineas", precio: 40000, img: "/aereo.jpg", seccion:1},
    //     {id:2, nombre:"Hotel",precio: 10000, img: "/hotel.jpg", seccion: 2},
    //     {id:3, nombre:"Excursión", precio:8000, img: "/excursion.jpg", seccion: 3}, 
    //     {id:4, nombre:"Bares", precio: 2000, img: "/bares.jpg", seccion: 4},
    //     {id:5, nombre:"Bus", precio: 10.000, img:"/aereo.jpg" , seccion:1},
    //     {id:6, nombre:"Flybondi", precio: 20.000, img: "/aereo.jpg", seccion:1},
    // ]
   
    const {id} =useParams()

   
  
    //Hooks
    const [productos, setProductos] = useState([])
    useEffect(() => {

        // ver como me traigo todo el array de productos aca!!!
        const items = firestore
        const itemsProducts = items.collection("productos")
        itemsProducts.get().then(querySnapshot => {
            if(querySnapshot.size === 0){
                console.log("No hay productos")
            }
            setProductos(querySnapshot.docs.map(doc => doc.data()))
        })
        .catch((error) => {
            console.log(error)
        })


        // setTimeout(() =>{
        //     setProductos(itemFiltrados)
        // },2000);
    }, [id]);


    let itemFiltrados
    if (id){
       itemFiltrados = productos.filter(item => item.seccion == id)
    }
    else{
        itemFiltrados = productos
    }
    console.log(itemFiltrados)

    return(
    <div id="intro">
        <h1>Bienvenidos al portal de viajes de Bariloche</h1>
        <p>Te damos la bienvenida a la temporada <span>{props.estacion} {props.temporada}</span></p>
        <p>Acá podrás:</p>
        <ul>
            <li><span className="material-icons">flight_takeoff</span>
                Comprar tus pasajes aéreos</li>
            <li><span className="material-icons">hotel</span>
                Reservar tu alojamiento a tu medida y gustos</li>
            <li><span className="material-icons">add_a_photo</span>
                Conseguir las mejores excursiones en esta bella ciudad</li>
            <li><span className="material-icons">restaurant</span>
                Informarte sobre dónde comer las exquisiteces de la región</li>
        </ul>
      
        <ItemList productos={itemFiltrados} 
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
    </div>
    )
}
export default ItemListContainer