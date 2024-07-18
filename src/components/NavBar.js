import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/FromHouseToHome-logo.jpg";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link><i className="fa-solid fa-right-to-bracket"></i> Sign in</Nav.Link>
            <Nav.Link><i className="fa-solid fa-user-plus"></i> Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
