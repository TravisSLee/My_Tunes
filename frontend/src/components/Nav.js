import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
        return (
            <Navbar bg="dark" variant="dark" >
               <Nav>
                   <Nav.Link href="/" >Home</Nav.Link>
                   <Nav.Link href="/about">About</Nav.Link>
                   <Nav.Link href="/songs">Your List of Songs</Nav.Link>
                   <Nav.Link href="/artists">Your List of Artists</Nav.Link>
                   <Nav.Link href="/songs/new">New Song</Nav.Link>
               </Nav>
            </Navbar>
        )
}

export default NavBar
