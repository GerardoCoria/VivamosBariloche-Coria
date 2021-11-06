import ItemCount from './ItemCount.js'

const ItemDetail =(props)=>{

    const verProducto=(data)=>{
        console.log(`son: ${data}`)
    }
    return(
        <div>
            {props.return}
            <ItemCount
            confirmar={verProducto}
            minimoDias={1} maximoDias={15}
            />
        </div>
    )
}
export default ItemDetail