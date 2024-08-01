import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/FromHouseToHome-logo.jpg";
import styles from "../styles/NavBar.module.css";
import ToolTip from "../components/ToolTip";
import { NavLink } from "react-router-dom";
import {
    useCurrentUser,
    useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
            removeTokenTimestamp();
        } catch (err) {
            // console.log(err);
        }
    };

    const loggedInIcons = (
        <>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/">
                <i className="fa-solid fa-signs-post"></i>All Posts
            </NavLink>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/feed">
                <i className="fa-solid fa-user-group"></i>Friends
            </NavLink>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/likes">
                <i className="fa-solid fa-heart"></i>Liked
            </NavLink>
            <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
                <i className="fa-solid fa-right-from-bracket"></i>Sign out
            </NavLink>
            <NavLink
                className={`${styles.NavLink} ${styles.Hello}`}
                to={`/profiles/${currentUser?.profile_id}`}>
                <ToolTip
                    id="tt-hello"
                    title="View or Edit your Profile"
                    placement="top">
                <i className={`${styles.Icon} fa-regular fa-circle-user`}></i>Hello {currentUser?.username}
                </ToolTip>
            </NavLink>
        </>
    );

    const loggedOutIcons = (
        <>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/signin">
                <i className="fa-solid fa-right-to-bracket"></i>Sign in
            </NavLink>
            <NavLink
                to="/signup"
                className={styles.NavLink}
                activeClassName={styles.Active}>
                <i className="fa-solid fa-user-plus"></i>Sign up
            </NavLink>
        </>
    );

    return (
        <Navbar
            expanded={expanded}
            className={styles.NavBar}
            expand="md"
            fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="logo" height="100" />
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle
                    ref={ref}
                    onClick={() => setExpanded(!expanded)}
                    aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-right">
                        {!currentUser && (
                            <NavLink
                                exact
                                className={styles.NavLink}
                                activeClassName={styles.Active}
                                to="/">
                                <i className="fa-solid fa-house"></i>
                                Home
                            </NavLink>
                        )}
                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
