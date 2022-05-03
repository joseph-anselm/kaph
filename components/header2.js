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
  Header2.image;
  Header2.title;
  Header2.excerpt;
  Header2.imgsrc;
  return (
    <div>
      <Container fluid className={styles.headerrow}>
        <Row>
          <div className={styles.subheader}>
            <img src={Header2.imgsrc} alt="Header About" />
            <span>
              <h2>{Header2.title}</h2>
              <p>{Header2.excerpt}</p>
            </span>
          </div>
        </Row>
      </Container>
    </div>
  );
}
