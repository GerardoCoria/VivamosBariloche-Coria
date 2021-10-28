import Contador from "./ItemCount"
import ListaProductos from "./ItemList"
import { useState, useEffect } from "react"
import Spinner from "../media/spinner.gif"
import fotoHotel from "../media/hotel.jpg"
import fotoAereo from "../media/aereo.jpg"
import fotoExcursion from "../media/excursion.jpg"
import bares from "../media/bares.jpg"


const Intro = (props) =>{

    //Productos
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

    function spinnerCargando() {
        if(productos.length==0){
            return(
                <div>
                    <img src={Spinner} alt="spinner" id="spinner"/>
                    <p id="cargando">{"Cargando productos..."}</p>
                </div> )
        }
        else{
            return(
              false
             )
        }
    }


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
        <h3 id="subTitulo">Algunos de nuestros productos/servicios son:</h3>
        {spinnerCargando()}
        <ListaProductos productos={productos}/>
    </div>
    )
}
export default Intro


    // Promise
    // const prom = {new Promise((res,rej)=>{    
    // setTimeout(()=>{res(["hotel","aereo"])},2000)
    // })} 
    // prom.then((item)=>{console.log(item)})
    // prom.catch(()=>{console.log("noooo")})