import MostrarProducto from "./Item"
const ListaProductos = (props) =>{

    // ¿Acá va promise?
    // const prom = new Promise((res,rej)=>{    
    //     setTimeout(()=>{res(["hotel","aereo"])},2000)
    // });  prom.then((item)=>{console.log(item)});prom.catch(()=>{console.log("noooo")});
    // Acá tiene que ir un map
    // const productos =[{id:1,nombre:"Hotel"},{id:2,nombre:"Aéreo"},{id:3,nombre:"Excusión"}]; 
    // productos.map((e,i)=>{console.log(i,e)})

    return(
        <div>
            <span>{props.texto}</span>
            <MostrarProducto
            // producto = {function(){
            //     (props.productos).map((e,i)=>{
            //         return(
            //             <p key={i}>{e}</p>)
            //         }
            //     )}}
            
            />
        </div>
        )
}
export default ListaProductos