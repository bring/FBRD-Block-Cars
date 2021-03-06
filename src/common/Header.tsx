import React from "react";

import {
    Navbar,
    Nav,
} from 'react-bootstrap';
import {
    Link
} from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/gov">Government</Link>
                        <Link className="nav-link" to="/service">Service</Link>
                        <Link className="nav-link" to="/user">Car Owner</Link>
                    <Nav.Link>
                    </Nav.Link>
                    <Nav.Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;