import {BrowserRouter as Router , Route , Switch} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import ThemeContext from "./context/ThemeContext"
import AppTheme from "./Colors"
// pages
import App from "./App"
import IVP from "./pages/ivp"
import IVR2 from "./pages/ivp2"
import NotFOund from "./pages/Notfound"
import Home from "./pages/home"
import { useContext, useState } from "react"


const Routing = () =>{
    const themeHook = useState("light");
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    return(
    <div>
        <ThemeContext.Provider value={themeHook}>
        <div
        style={{
            backgroundColor:`${currentTheme. backgroundColor}`,
            color:`${currentTheme.textColor}`
        }}
        >
        <Router>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/rapp/ivrivp" component={IVP}/>
            <Route exact path="/rapp/futoiscan" component={IVR2}/>
            <Route exact path="*" component={NotFOund}/>
            </Switch>
        </Router>
        </div>
        </ThemeContext.Provider>
    </div>
    )
}
export default Routing