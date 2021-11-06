import Item from "./Item"
import Loading from "../media/loading.gif"
import { Link } from "react-router-dom"

const ItemList = (props) =>{
    
    // Acá va la iteración
        return(
            <div className= "fondoRadial">
                <h3 className="subTitulo">Algunos de nuestros productos/servicios son:</h3>
                {props.loading(Loading)}
            <div id="productosPintados">
            {(props.productos).map((productos)=>{
                return(
                    <Item id="productosPintados"
                    pintar={<div key={productos.id} className="itemsIntro">
                                <img src={productos.img} alt="img"/>
                                <span>{productos.nombre}</span>
                                <button>
                                    <Link to={`/items/${productos.id}`}>Ver más</Link>
                                </button>
                            </div>}
                    />
                )
            })} 
            </div>
            </div>
        )
}
export default ItemList