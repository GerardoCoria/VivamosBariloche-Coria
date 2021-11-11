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
                    <Item key={productos.id} id="productosPintados"
                    pintar={<div className="itemsIntro">
                                <img src={productos.img} alt="img"/>
                                <span>{productos.nombre}</span>
                                <button id="btnVerMas">
                                    <Link to={`/items/${productos.id}`}>
                                    <span>Ver más</span>
                                    <span class="material-icons">visibility</span>
                                    </Link>
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