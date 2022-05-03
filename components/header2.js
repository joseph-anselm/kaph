import React from "react";
import styles from "../styles/Header.module.css";
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
  Carousel,
  CarouselItem,
} from "react-bootstrap";
import { useEffect } from "react";

export default function Header2() {
  return (
    <div>
      <Container fluid className={styles.headerrow}>
        <Row>
          <div className={styles.subheader}>
            <img src="/img/bgd-3.jpg" alt="Header About" />
            <span>
              <h2>About Us - Our Unique Story </h2>
              <p>
                We are from a place where Professionalism is never compromised.
              </p>
            </span>
          </div>
        </Row>
      </Container>
    </div>
  );
}
