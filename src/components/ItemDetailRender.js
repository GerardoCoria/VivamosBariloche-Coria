const ItemDetailRender = (props) => {
    return (
    <>
        <p id="tituloDetail">{props.productos.nombre}</p>
        <p id="precioDetail">Precio: $ {props.productos.precio}</p>
        <img src={props.productos.img} alt="imagen"  id="imagenDetail"/>
        <p id="descripcionDetail">{props.productos.descripcion}</p>
    </>
    )
}
export default ItemDetailRender