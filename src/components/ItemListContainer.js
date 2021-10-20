const Intro = (props) =>{
    console.log(props)
    return(
    <div id="intro">
        <h1>Bienvenidos al portal de viajes de Bariloche</h1>
        <p>Te damos la bienvenida a la temporada <span>{props.estacion} {props.temporada}</span></p>
        <p>Acá podrás:</p>
        <ul>
            <li><span className="material-icons">flight_takeoff</span>
                Comprar tus pasajes aéreos</li>
            <li><span class="material-icons">hotel</span>
                Reservar tu alojamiento a tu medida y gustos</li>
            <li><span class="material-icons">add_a_photo</span>
                Conseguir las mejores excursiones en esta bella ciudad</li>
            <li><span class="material-icons">restaurant</span>
                Informarte sobre dónde comer las exquisiteces de la región</li>
        </ul>
    </div>)}
export default Intro