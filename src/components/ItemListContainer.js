import Contador from "./ItemCount"
import ListaProductos from "./ItemList"
import { useState, useEffect } from "react"
import fotoHotel from "../media/hotel.jpg"
import fotoAereo from "../media/aereo.jpg"
import fotoExcursion from "../media/excursion.jpg"
import bares from "../media/bares.jpg"
import { useParams } from "react-router-dom"

const Intro = (props) =>{
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

    let itemFiltrados
    
    if (id){
       itemFiltrados = items.filter(item => item.seccion == id)
    }
    else{
        //return false
        itemFiltrados = items
    }
//    const itemFiltrados = items.filter(item => item.seccion == id)
    console.log(itemFiltrados)
  
    //Hooks
    const [productos, setProductos] = useState([])
    useEffect(() => {
        setTimeout(() =>{
            setProductos(itemFiltrados)
        },2000);
    }, [id]);

    // if(id){
    //     setProductos(itemFiltrados)
    // }

    //es una prueba, tengo que ver porque no me cargan las imagenes
    // useEffect(()=>{
    //     fetch("https://raw.githubusercontent.com/GerardoCoria/VivamosBariloche-Coria/main/src/components/productos.json")
    //     .then(response=>response.json())
    //     .then(productos =>setTimeout(()=>setProductos(productos),2000))
    //     },[])

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
        <Contador minimoDias={1} maximoDias={15}
            confirmar={function(abc){console.log(`Los días elegidos son:${abc}`)}}
        />
        <ListaProductos productos={productos} loading= {function (Loading) {
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
export default Intro