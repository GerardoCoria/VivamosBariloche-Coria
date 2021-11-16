import NavBar from "./navBar"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Cart from "./cart"
import ComponenteDelContexto from "./CartContext"

const App = () =>{
return(
    <div>
        <BrowserRouter>
        <ComponenteDelContexto>
            <NavBar/>
                <Switch>
                    {/* Ruta 1 a la pagina principal */}
                    <Route exact path="/">
                        <ItemListContainer estacion = {"verano"} temporada={"2021/22"}/>
                    </Route>
                    {/* Ruta 2 a las secciones*/}
                    <Route path="/seccion/:id">
                        <ItemListContainer estacion = {"verano"} temporada={"2021/22"}/>
                    </Route>
                    {/* Ruta 3 a  los items*/}
                    <Route path="/item/:id">
                        <ItemDetailContainer/>
                    </Route>
                    {/* Ruta 4 */}
                    <Route path="/cart">
                        <Cart/>
                    </Route>
                </Switch>
        </ComponenteDelContexto>      
        </BrowserRouter>
    </div>
)}
export default App