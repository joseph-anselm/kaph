import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Menubar.module.css";
import {
  Navbar,
  Container,
  Row,
  Col,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Badge,
} from "react-bootstrap";

export default function Menubar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="sticky-top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/img/kaphlogo.png"
              width="159"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto text-blue-900">
              <Nav.Link href="/">
                <span className="text-blue-900 text-lg hover:text-yellow-400 hover:border-b-2 hover:border-b-blue-900 transition duration-300 delay-100 hover:delay-0 p-1">
                  Home
                </span>
              </Nav.Link>
              <Nav.Link href="/about">
                {" "}
                <span className="text-blue-900 text-lg hover:text-yellow-400 hover:border-b-2 hover:border-b-blue-900 transition duration-300 delay-100 hover:delay-0 p-1">
                  About Us
                </span>
              </Nav.Link>
              <Nav.Link href="/services">
                <span className="text-blue-900 text-lg hover:text-yellow-400 hover:border-b-2 hover:border-b-blue-900 transition duration-300 delay-100 hover:delay-0 p-1">
                  Our Services
                </span>
              </Nav.Link>
              <Nav.Link href="/contact">
                <span className="text-blue-900 text-lg hover:text-yellow-400 hover:border-b-2 hover:border-b-blue-900 transition duration-300 delay-100 hover:delay-0 p-1">
                  Contact
                </span>
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link href="/contact">
                <Button variant="primary" className={styles.navbutton}>
                  Live Chat
                </Button>{" "}
              </Nav.Link>
              {/* <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
