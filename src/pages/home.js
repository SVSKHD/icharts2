import {useContext} from "react"
import { Link } from "react-router-dom"
import {Button , ButtonGroup } from "reactstrap"
import Layout from "../components/Layout/Layout"

import ThemeContext from "../context/ThemeContext"
import AppTheme from "../Colors"


const Home = () =>{
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    return(
    <div
    style={{
        backgroundColor:`${currentTheme.backgroundColor}`,
        color:`${currentTheme.textColor}`
    }}
    >
        <Layout>
        <div className="text-center">
        <h1>Hello</h1>
        <ButtonGroup>
               <Button tag={Link} to="/rapp/ivrivp">IVR tool</Button>
               <Button tag={Link} to="/rapp/futioscan">Future scan</Button>
        </ButtonGroup>
        </div>
        </Layout>
    </div>
)
}
export default Home