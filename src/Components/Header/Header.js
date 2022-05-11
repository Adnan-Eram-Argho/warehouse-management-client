import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div >
            <Navbar className='navigation' expand="lg" fixed="top" variant="light">
                <Container >
                    <Navbar.Brand as={Link} to="/" className="text-light">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse >
                        <Nav className="me-auto">

                        </Nav>
                        <Nav >
                            <Nav.Link href="#home" className="text-light">Home</Nav.Link>
                            <Nav.Link href="#link" className="text-light">Link</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container >
            </Navbar >
        </div >
    );
};

export default Header;