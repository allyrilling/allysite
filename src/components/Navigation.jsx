import React from "react";
import { withRouter } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import myIcon from "../images/mylogo.svg"

// TODO: convert to an rcc so that i can use props to preserve state of which page we are on

function Navigation ( props )
{
  return (
    <Navbar collapseOnSelect expand="sm" bg="#242424" variant="dark">
      <Container>
        <Navbar.Brand className="align-center" style={{ fontSize: '30px' }} href="Home">
          {/* <img
            alt=""
            src={myIcon}
          />{' '} */}
          Ally Rilling</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="Home" className="linkHover">Home</Nav.Link>
            <Nav.Link href="Resume" className="linkHover">Resume</Nav.Link>
            <Nav.Link href="Projects" className="linkHover">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default withRouter( Navigation );