import Contador from "./ItemCount"
import ListaProductos from "./ItemList"
import { useState, useEffect } from "react"
// import Loading from "../media/loading.gif"
import fotoHotel from "../media/hotel.jpg"
import fotoAereo from "../media/aereo.jpg"
import fotoExcursion from "../media/excursion.jpg"
import bares from "../media/bares.jpg"

const Intro = (props) =>{

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
        if(productos.length==0){
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