import MostrarProducto from "./Item"
const ListaProductos = (props) =>{
    // Acá va la iteración
        return(
            <div id="productosPintados">
            {(props.productos).map((e,i)=>{
                return(
                    <MostrarProducto id="productosPintados"
                    pintar={<div key={e.id} className="itemsIntro">
                                <img src={e.img}/>{e.nombre}<br/>
                                <p>precio:<span>{ e.precio}</span></p>
                            </div>}
                    />
                )
            })} 
            </div>
        )
}
export default ListaProductos