import BarraMenu from "./navBar"
import Intro from "./ItemListContainer"
import ContenedorItem from "./ItemDetailContainer"
import {BrowserRouter} from "react-router-dom"

const App = () => <div>
    <BrowserRouter>
        <BarraMenu/>
        <Intro estacion = {"verano"} temporada={"2021/22"}/>
        <ContenedorItem/>
    </BrowserRouter>
                </div>
export default App
