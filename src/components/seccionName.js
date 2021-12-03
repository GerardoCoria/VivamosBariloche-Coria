const SeccionName =(props)=>{
    let nombreSeccion=""
    if (props.idSeccion==1){
        nombreSeccion="Chocolates"
    }
    else if (props.idSeccion==2){
        nombreSeccion="Alfajores"
    }
    else if (props.idSeccion==3){
        nombreSeccion="Helados"
    }
    else if (props.idSeccion==4){
        nombreSeccion="Bombones"
    }
    else if (props.idSeccion==5){
        nombreSeccion="Regalos"
    }
    else if (props.idSeccion==6){
        nombreSeccion="Kids"
    }
    else{
        nombreSeccion="Nuestra oferta completa de productos:"
    }
    return nombreSeccion
}
export default SeccionName