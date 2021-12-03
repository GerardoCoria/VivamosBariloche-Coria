const BtnCart = (props) => {
    return(
        <div id="btnCart">
            <button onClick={props.finalizarCompra} id="btnIrAForm">
                <span className="material-icons">paid</span>
                Ir a pagar
            </button>
            <button onClick={props.vaciarCarrito} id="btnVaciar">
                <span className="material-icons">delete</span>
                Vaciar carrito
            </button>
        </div>
    )
}
export default BtnCart