import React from "react"
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import CartWidget from "./CartWidget";
export default function NavBar(){
    return (
    <>
        <Navbar bg="light" expand="lg">
        <CartWidget/>
          <Navbar.Brand className="ms-4"><img src="https://fernandoabrego.github.io/Proyecto-Final/images/PETITS%20LOGO.png" style={{height:"40px", width:"40px"}} alt="Logo Petit Cotons"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Productos</Nav.Link>
              <Nav.Link>Nosotros</Nav.Link>
              <Nav.Link>Preguntas Frecuentes</Nav.Link>
              <Nav.Link>Contacto</Nav.Link>
              <NavDropdown title="RRSS" id="basic-nav-dropdown">
                <NavDropdown.Item>Instagram</NavDropdown.Item>
                <NavDropdown.Item>Facebook</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item>Cama</NavDropdown.Item>
                <NavDropdown.Item>Accesorios</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </>
    )
    }