import React from 'react';
import {Navbar,NavDropdown, Nav} from 'react-bootstrap';

function TopNav(){
    return(
    <Navbar bg="light"  expand="lg">
        <Navbar.Brand href="/">NNC</Navbar.Brand>
        <Navbar.Toggle aria-controls="navigation-bar" />
        <Navbar.Collapse id="navigation-bar">
        <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Health">Health Status</Nav.Link>
            <Nav.Link href="/Travel">Travel Reports</Nav.Link>
            <Nav.Link href="/Exposure">Exposure Reports</Nav.Link>
            <Nav.Link href="/Tests">RT PCR Tests</Nav.Link>
            
        </Nav>         
        <Nav>
            <NavDropdown title="Employee Name" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Profile">Change Password</NavDropdown.Item>
                <NavDropdown.Item href="/Login">Logout</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default TopNav;