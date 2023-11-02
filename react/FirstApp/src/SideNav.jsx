import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

  function SideNav() {

    return (
      <>
        <Navbar  className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
                <Link className='nav-link' to='/services'>Services</Link>
                <Link className='nav-link' to='/books'>Books</Link>
                <Link className='nav-link' to='/usestate'>useState</Link>
                <Link className='nav-link' to='/api'>API</Link>
                <Link className='nav-link' to='/rdxcntr'>ReduxCounter</Link>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }

export default SideNav