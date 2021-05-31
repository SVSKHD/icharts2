import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import {Link} from "react-router-dom"
import ThemeToggler from '../ThemeToogler';


const NAVB = ({NAVC}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
     
      <Navbar className="NAVB" color={NAVC} dark expand="md">
      <Container fluid>
        <NavbarBrand href="/">iCharts</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/rapp/ivrivp">IVR</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/rapp/futoiscan" >FutioScan</NavLink>
            </NavItem>
          </Nav>
       
         <Nav className="ml-auto">
         <ThemeToggler/>
         </Nav>

        </Collapse>
        </Container>
      </Navbar>

     
      
    </div>
  );
}

export default NAVB;
