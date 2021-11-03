import MostrarProducto from "./Item"
import Loading from "../media/loading.gif"

const ListaProductos = (props) =>{
    
    // Acá va la iteración
        return(
            <div className= "fondoRadial">
                <h3 className="subTitulo">Algunos de nuestros productos/servicios son:</h3>
                {props.loading(Loading)}
            <div id="productosPintados">
            {(props.productos).map((e,i)=>{
                return(
                    <MostrarProducto id="productosPintados"
                    pintar={<div className="itemsIntro" key={e.id}>
                                <img src={e.img} alt="img"/>
                                <span>{e.nombre}</span>
                            </div>}
                    />
                )
            })} 
            </div>
            </div>
        )
}
export default ListaProductos