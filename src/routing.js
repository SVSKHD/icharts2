import {BrowserRouter as Router , Route , Switch} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
// pages
import App from "./App"
import IVP from "./pages/ivp"
import IVR2 from "./pages/ivp2"
import NotFOund from "./pages/Notfound"
import Home from "./pages/home"


const Routing = () =>{
    return(
    <div>
        <Router>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/rapp/ivrivp" component={IVP}/>
            <Route exact path="/rapp/futioscan" component={IVR2}/>
            <Route exact path="*" component={NotFOund}/>
            </Switch>
        </Router>
    </div>
    )
}
export default Routing