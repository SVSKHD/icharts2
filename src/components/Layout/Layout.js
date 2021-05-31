import {useContext} from "react"
import NAVB from "./NAVB"
import Footer from "./Footer"

// theme
import ThemeContext from "../../context/ThemeContext";
import AppTheme from "../../Colors";


const Layout = (props)=>{
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    return(
        <div>
           <NAVB
           NAVC={`${currentTheme.NAVCOLOR}`}
           />
           <br className="mb-5"/>
           {props.children}
           <br className="mb-5"/>
           <Footer
           FC={`${currentTheme.Boottheme}`}
           />
        </div>
    )
}
export default Layout