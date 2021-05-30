import { Link } from "react-router-dom"
import {Button , ButtonGroup } from "reactstrap"
import Layout from "../components/Layout/Layout"

const Home = () =>{
return(
    <div>
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