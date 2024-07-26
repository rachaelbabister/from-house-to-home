import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/FromHouseToHome-logo.jpg";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const NavBar = () => {
    const currentUser = useCurrentUser();

    const loggedInIcons = <>{currentUser?.username}</>;
    const loggedOutIcons = (
        <>
          <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/signin"
          >
            <i className="fa-solid fa-right-to-bracket"></i>Sign in
          </NavLink>
          <NavLink
            to="/signup"
            className={styles.NavLink}
            activeClassName={styles.Active}
          >
            <i className="fa-solid fa-user-plus"></i>Sign up
          </NavLink>
        </>
      );
    
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="logo" height="100" />
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-right">
                        <NavLink
                            exact
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/">
                            <i className="fa-solid fa-house"></i>
                            Home
                        </NavLink>

                        {currentUser ? loggedInIcons : loggedOutIcons}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
