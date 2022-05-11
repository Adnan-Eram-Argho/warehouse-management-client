import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div >
            <Navbar className='navigation' expand="lg" fixed="top" variant="dark">
                <Container >
                    <Navbar.Brand as={Link} to="/" className="text-light">Fruits Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse >
                        <Nav className="me-auto">

                        </Nav>
                        <Nav >
                            <Nav.Link href="#home" className="text-light">Home</Nav.Link>
                            <Nav.Link href="#link" className="text-light">Link</Nav.Link>
                            {
                                user ? <button className='btn' onClick={handleSignOut}>Sign Out</button> : <Nav.Link as={Link} to="/signup">Sign up</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container >
            </Navbar >
        </div >
    );
};

export default Header;