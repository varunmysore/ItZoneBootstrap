import React from "react";
import logo from "../../Assets/itzonelogo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Navbarfile = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbar bg-body-tertiary">
        <Container>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}

          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              width="150"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/cctvservices">
                  CCTV Services
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/enterprisewifi">
                  Enterprise WIFI
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/hardwareandnetworking">
                  Hardware and Networking
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/laptopandcomputer">
                  Laptop and Computer
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarfile;
