import React from "react";
import styles from "../styles/Services.module.css";
import * as Icon from "react-bootstrap-icons";
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
  Accordion,
} from "react-bootstrap";
import Header2 from "../components/header2";

Header2.imgsrc = "img/bgd-5.jpg";
Header2.title = "Our Exceptional Services";
Header2.excerpt = "We are Competent and Result-oriented";

export default function services() {
  return (
    <div className={styles.section1}>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
