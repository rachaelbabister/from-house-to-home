import React from 'react'
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import logo from "../assets/FromHouseToHome-logo.jpg"

const NavBar = () => {
    return (
        <Navbar expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="logo" height="100" />
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-right">
                        <Nav.Link><i className="fa-solid fa-house"></i> Home</Nav.Link>
                        <Nav.Link><i className="fa-solid fa-right-to-bracket"></i> Sign in</Nav.Link>
                        <Nav.Link><i className="fa-solid fa-user-plus"></i> Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;