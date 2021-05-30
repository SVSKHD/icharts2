import { Link } from "react-router-dom"
import {Container , Jumbotron , Button} from "reactstrap"
import {FaArrowLeft} from "react-icons/fa"

const NotFOund = () =>{
    return(
        <div>
            <br className="mb-5"/>
            <Container>
            <Jumbotron className="shadow-lg">
            <div className="text-center">
            <h1>404 Requested Page not found</h1>
            <Button tag={Link} to="/"><FaArrowLeft size={30} /></Button>
            <br className="mb-5"/>
            </div>
            </Jumbotron>
            </Container>
            </div>
    )
    }
    export default NotFOund