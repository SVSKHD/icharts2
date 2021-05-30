

import NAVB from "./NAVB"
import Footer from "./Footer"



const Layout = (props)=>{
    return(
        <div>
           <NAVB/>
           <br className="mb-5"/>
           {props.children}
           <br className="mb-5"/>
           <Footer/>
        </div>
    )
}
export default Layout