import React from 'react';
import {Nav, Navbar, Container} from "react-bootstrap";
import {NavLink} from "react-router-dom"

function Header() {
    return (
<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">GoldenRestaurant</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Back</Nav.Link>


    </Nav>
    </Container>
  </Navbar>

</>
    )
}

export default Header
