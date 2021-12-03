import NavBar from "./navBar"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Cart from "./cart"
import ComponenteDelContexto from "./CartContext"
import Footer from "./footer"
import Form from "./form"

const App = () =>{
return(
    <BrowserRouter>
        <ComponenteDelContexto>
            <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer/>
                    </Route>
                    <Route path="/seccion/:id">
                        <ItemListContainer/>
                    </Route>
                    <Route path="/item/:id">
                        <ItemDetailContainer/>
                    </Route>
                    <Route path="/cart">
                        <Cart/>
                    </Route>
                    <Route path="/checkout">
                        <Form/>
                    </Route>
                </Switch>
        </ComponenteDelContexto>  
        <Footer/>    
    </BrowserRouter>
)}
export default App