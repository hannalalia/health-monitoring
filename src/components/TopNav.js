import React from 'react';
import {Navbar,NavDropdown, Nav} from 'react-bootstrap';

function TopNav(){
    return(
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">NNC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Health">Health Status</Nav.Link>
            <Nav.Link href="#link2">Exposure Reports</Nav.Link>
            <Nav.Link href="#link3">RT PCR Tests</Nav.Link>
            <NavDropdown title="Employee Name" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default TopNav;