import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../images/main-logo.png";
import {AiOutlineHome} from 'react-icons/ai';
const Navbarr = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand className="navbar-logo" href="/"><img src={logo} alt="logo"  /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        
          <Nav.Link href="/"> <AiOutlineHome /> Home</Nav.Link>
          
          <NavDropdown title="Best Recipes" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Breakfast recipes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Lunch recipes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Dinner recipes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Salad recipes</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbarr