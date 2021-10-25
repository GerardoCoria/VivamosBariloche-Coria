import Contador from "./ItemCount"
import ListaProductos from "./ItemList"
const Intro = (props) =>
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
        <ListaProductos texto={"es es la lista de productos"}
                productos = {[{id:1,nombre:"Hotel"},{id:2,nombre:"Aéreo"},{id:3,nombre:"Excusión"}]} 
        />
    </div>
export default Intro