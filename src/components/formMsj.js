import HappyChocolate from "../media/chocolate-comprado.jpg"

const FormMsj =(props)=>{
        return(  
                <div id="compraHecha">
                        <img src={HappyChocolate} alt="chocolate"/>
                        <div>
                                <p><strong>{props.usuario.nombre}</strong>, su compra se ha realizado con éxito!</p>
                                <p>Gracias por su compra de:</p>
                                {(props.cartMsj).map((producto, i)=>{
                                return(<p key={i} className="compraLista">{producto.nombre}</p>)
                                })}
                                <p>Su numero de orden es: <strong>#{props.id}</strong></p>
                                <p>¡Que lo disfrutes!</p>
                        </div>
                </div>
        )       
}
export default FormMsj