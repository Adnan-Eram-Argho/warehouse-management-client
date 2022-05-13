import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const url = `myitems/${email}`
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div  >
            <Navbar className='navigation ' expand="lg" fixed="top" variant="dark">
                <Container >
                    <Navbar.Brand as={Link} to="/" className="text-light">Fruits Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse >
                        <Nav className="me-auto">

                        </Nav>
                        <Nav >
                            <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blogs" className="text-light">blogs</Nav.Link>


                            {
                                user ? <Nav.Link as={Link} to="/manageinventories" className="text-light"> Manage Items</Nav.Link> : ''
                            }
                            {
                                user ? <Nav.Link as={Link} to="/addnewitem" className="text-light">Add Item</Nav.Link> : ''
                            }
                            {
                                user ? <Nav.Link as={Link} to={url} className="text-light">My items</Nav.Link> : ''
                            }
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