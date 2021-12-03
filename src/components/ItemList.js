import Item from "./Item"
import Loading from "../media/loading.gif"
import { Link } from "react-router-dom"
import SeccionName from "./seccionName"

const ItemList = (props) =>{
    const idSeccion = props.id
    return(
        <>
            <h3 className="subTitulo"><SeccionName idSeccion={idSeccion}/></h3>
            {props.loading(Loading)}              
            <div id="productosPintados">
                {(props.productos).map((productos)=>{
                    return(                    
                        <Item key={productos.id} 
                            pintar={<div className="itemsIntro">
                                <Link to={`/item/${productos.id}`}>
                                    <img src={productos.img} alt="img"/>
                                    <p id="introNombre">{productos.nombre}</p>
                                    <button id="btnVerMas">
                                        <span className="material-icons">visibility</span>
                                        <span>Ver más...</span>
                                    </button>
                                </Link>
                            </div>}
                        />
                    )
                })} 
            </div>
        </>
    )
}
export default ItemList