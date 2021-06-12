import React from 'react';
import {Nav, Navbar, Container} from "react-bootstrap";
import {NavLink} from "react-router-dom"

function Header() {
    return (
<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">GoldenTulip</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="/page/aboutus">AboutUs</Nav.Link>

    </Nav>
    </Container>
  </Navbar>

</>
    )
}

export default Header
