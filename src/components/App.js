import BarraMenu from "./navBar"
import Intro from "./ItemListContainer"
import ContenedorItem from "./ItemDetailContainer"
import {BrowserRouter, Route, Switch} from "react-router-dom"

const App = () =>{
return(
    <div>
        <BrowserRouter>
            <BarraMenu/>
                <Switch>
                    {/* Ruta 1 a la pagina principal */}
                    <Route exact path="/">
                        <Intro estacion = {"verano"} temporada={"2021/22"}/>
                    </Route>
                    {/* Ruta 2 a las secciones*/}
                    <Route path="/seccion/:id">
                        <Intro estacion = {"verano"} temporada={"2021/22"}/>
                    </Route>
                    {/* Ruta 3 a  los items*/}
                    <Route path="/items/:id">
                        <ContenedorItem/>
                    </Route>
                </Switch>  
        </BrowserRouter>
    </div>
)}
export default App