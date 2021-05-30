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


const NAVB = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
     
      <Navbar className="NAVB" color="info" dark expand="md">
      <Container fluid>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/rapp/ivrivp">IVR</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/rapp/futioscan" >FutioScan</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
      {props.children}

     
      
    </div>
  );
}

export default NAVB;
